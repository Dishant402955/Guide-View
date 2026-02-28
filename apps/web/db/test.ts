import { db } from './index';
import { video, folder, link, comment, access, recycleBin, notification, activity } from '../drizzle/schema';
import { eq, sql } from 'drizzle-orm';

// ------------------ VIDEO TEST FUNCTIONS ------------------

export const getVideos = async () => {
  try {
    const res = await db.select().from(video);
    console.log("All videos:", res);
    return res;
  } catch (error) {
    console.error("Error fetching videos:", error);
  }
};

export const createVideo = async (data: {
  rawUrl: string;
  animUrl: string;
  thumbUrl: string;
  title: string;
  description: string;
  folderId: string;
  ownerId: string;
}) => {
  try {
    const res = await db.insert(video).values({
      ...data,
    }).returning();
    console.log("Video created:", res);
    return res;
  } catch (error) {
    console.error("Error creating video:", error);
  }
};

export const updateVideoTitle = async (id: string, newTitle: string) => {
  try {
    const res = await db.update(video)
      .set({ title: newTitle, updatedAt: sql`now()` })
      .where(eq(video.id, id))
      .returning();
    console.log("Video updated:", res);
    return res;
  } catch (error) {
    console.error("Error updating video:", error);
  }
};

export const deleteVideo = async (id: string) => {
  try {
    const res = await db.update(video)
      .set({ deleted: true, updatedAt: sql`now()` })
      .where(eq(video.id, id))
      .returning();
    console.log("Video soft-deleted:", res);
    return res;
  } catch (error) {
    console.error("Error deleting video:", error);
  }
};

// ------------------ FOLDER TEST FUNCTIONS ------------------

export const getFolders = async () => {
  try {
    const res = await db.select().from(folder);
    console.log("All folders:", res);
    return res;
  } catch (error) {
    console.error("Error fetching folders:", error);
  }
};

export const createFolder = async (data: { title: string; orgId: string; ownerId: string; parentId?: string }) => {
  try {
    const res = await db.insert(folder).values({
      ...data,
    }).returning();
    console.log("Folder created:", res);
    return res;
  } catch (error) {
    console.error("Error creating folder:", error);
  }
};

// ------------------ COMMENT TEST FUNCTIONS ------------------

export const createComment = async (data: { videoId: string; message: string; commenterId: string; isPublic?: boolean; mentionList?: any }) => {
  try {
    const res = await db.insert(comment).values({
      ...data,
    }).returning();
    console.log("Comment created:", res);
    return res;
  } catch (error) {
    console.error("Error creating comment:", error);
  }
};

// ------------------ ACCESS TEST FUNCTIONS ------------------

export const grantAccess = async (data: { itemType: 'A' | 'B' | 'C'; itemId: string; grantedUser?: string; grantedOrg?: string; grantedBy: string; accessLevel: '1' | '2' | '3' }) => {
  try {
    const res = await db.insert(access).values({
      ...data,
    }).returning();
    console.log("Access granted:", res);
    return res;
  } catch (error) {
    console.error("Error granting access:", error);
  }
};

// ------------------ ACTIVITY TEST FUNCTION ------------------

export const logActivity = async (data: { action: string; itemType: 'A' | 'B' | 'C'; itemId: string; message: string; whoDid: string }) => {
  try {
    const res = await db.insert(activity).values({
      ...data,
    }).returning();
    console.log("Activity logged:", res);
    return res;
  } catch (error) {
    console.error("Error logging activity:", error);
  }
};