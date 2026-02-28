import { pgTable, foreignKey, uuid, text, timestamp, boolean, json, pgEnum } from "drizzle-orm/pg-core"
import { sql } from "drizzle-orm"

export const accessLevelEnum = pgEnum("accessLevelEnum", ['1', '2', '3'])
export const commentTypeEnum = pgEnum("commentTypeEnum", ['none', 'publicVisible', 'ownerVisible'])
export const itemTypeEnum = pgEnum("itemTypeEnum", ['A', 'B', 'C'])
export const linkTypeEnum = pgEnum("linkTypeEnum", ['public', 'private', 'list', 'org', 'rigid'])
export const notificationTypeEnum = pgEnum("notificationTypeEnum", ['A', 'B', 'C'])


export const link = pgTable("link", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	videoId: uuid(),
	linkType: linkTypeEnum(),
	commentType: commentTypeEnum(),
	ownerId: text(),
	createdAt: timestamp({ mode: 'string' }).defaultNow(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow(),
	deleted: boolean().default(false),
}, (table) => [
	foreignKey({
			columns: [table.videoId],
			foreignColumns: [video.id],
			name: "constraint_1"
		}).onUpdate("cascade").onDelete("cascade"),
]);

export const folder = pgTable("folder", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	title: text(),
	orgId: text(),
	ownerId: text(),
	createdAt: timestamp({ mode: 'string' }).defaultNow(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow(),
	parentId: uuid(),
	deleted: boolean().default(false),
});

export const video = pgTable("video", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	rawUrl: text(),
	animUrl: text(),
	thumbUrl: text(),
	title: text(),
	description: text(),
	folderId: uuid(),
	ownerId: text(),
	createdAt: timestamp({ mode: 'string' }).defaultNow(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow(),
	deleted: boolean().default(false),
}, (table) => [
	foreignKey({
			columns: [table.folderId],
			foreignColumns: [folder.id],
			name: "constraint_1"
		}).onUpdate("cascade").onDelete("cascade"),
]);

export const recycleBin = pgTable("recycleBin", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	itemType: itemTypeEnum(),
	itemId: uuid(),
	deletedTime: timestamp({ mode: 'string' }).defaultNow(),
	deletedBy: text(),
	recursivelyDeleted: boolean().default(false),
});

export const comment = pgTable("comment", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	videoId: uuid(),
	message: text(),
	commenterId: text(),
	timeOfComment: timestamp({ mode: 'string' }).defaultNow(),
	isPublic: boolean().default(false),
	mentionList: json(),
	createdAt: timestamp({ mode: 'string' }).defaultNow(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow(),
	deleted: boolean().default(false),
}, (table) => [
	foreignKey({
			columns: [table.videoId],
			foreignColumns: [video.id],
			name: "constraint_1"
		}),
]);

export const access = pgTable("access", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	itemType: itemTypeEnum(),
	itemId: uuid(),
	grantedUser: text(),
	grantedOrg: text(),
	grantedBy: text(),
	accessLevel: accessLevelEnum(),
	createdAt: timestamp({ mode: 'string' }).defaultNow(),
	updatedAt: timestamp({ mode: 'string' }).defaultNow(),
});

export const notification = pgTable("notification", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	type: notificationTypeEnum(),
	itemType: itemTypeEnum(),
	itemId: uuid(),
	message: text(),
	forWhom: text(),
	createdAt: timestamp({ mode: 'string' }).defaultNow(),
	read: boolean().default(false),
});

export const activity = pgTable("activity", {
	id: uuid().defaultRandom().primaryKey().notNull(),
	action: text(),
	itemType: itemTypeEnum(),
	itemId: uuid(),
	activityTime: timestamp({ mode: 'string' }).defaultNow(),
	message: text(),
	whoDid: text(),
});
