import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue, off, get, DatabaseReference } from 'firebase/database';
import { HNItem } from '@/types/hackernews';

const firebaseConfig = {
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export const hackernewsAPI = {
  async getNewPostIds(): Promise<number[]> {
    const postRef = ref(database, 'v0/newstories');
    const snapshot = await get(postRef);
    return snapshot.val() || [];
  },

  async getTopPostIds(): Promise<number[]> {
    const postRef = ref(database, 'v0/topstories');
    const snapshot = await get(postRef);
    return snapshot.val() || [];
  },

  async getItem(id: number): Promise<HNItem | null> {
    const itemRef = ref(database, `v0/item/${id}`);
    const snapshot = await get(itemRef);
    return snapshot.val();
  },

  async getItems(ids: number[]): Promise<HNItem[]> {
    const items = await Promise.all(
      ids.map(async (id) => {
        const itemRef = ref(database, `v0/item/${id}`);
        const snapshot = await get(itemRef);
        return snapshot.val();
      })
    );
    return items.filter((item): item is HNItem => item !== null);
  },

  subscribeToNewPosts(callback: (postIds: number[]) => void): () => void {
    const postRef = ref(database, 'v0/newstories');
    onValue(postRef, (snapshot) => {
      const postIds = snapshot.val() || [];
      callback(postIds);
    });
    return () => off(postRef);
  },

  subscribeToTopPosts(callback: (postIds: number[]) => void): () => void {
    const postRef = ref(database, 'v0/topstories');
    onValue(postRef, (snapshot) => {
      const postIds = snapshot.val() || [];
      callback(postIds);
    });
    return () => off(postRef);
  },

  subscribeToItem(id: number, callback: (item: HNItem | null) => void): () => void {
    const itemRef = ref(database, `v0/item/${id}`);
    onValue(itemRef, (snapshot) => {
      callback(snapshot.val());
    });
    return () => off(itemRef);
  },

  unsubscribe(refPath: string): void {
    const dbRef: DatabaseReference = ref(database, refPath);
    off(dbRef);
  },
};
