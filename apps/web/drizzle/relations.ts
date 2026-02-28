import { relations } from "drizzle-orm/relations";
import { video, link, folder, comment } from "./schema";

export const linkRelations = relations(link, ({one}) => ({
	video: one(video, {
		fields: [link.videoId],
		references: [video.id]
	}),
}));

export const videoRelations = relations(video, ({one, many}) => ({
	links: many(link),
	folder: one(folder, {
		fields: [video.folderId],
		references: [folder.id]
	}),
	comments: many(comment),
}));

export const folderRelations = relations(folder, ({many}) => ({
	videos: many(video),
}));

export const commentRelations = relations(comment, ({one}) => ({
	video: one(video, {
		fields: [comment.videoId],
		references: [video.id]
	}),
}));