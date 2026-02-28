// import {
//   getVideos,
//   createVideo,
//   createFolder,
//   createComment,
//   grantAccess,
//   logActivity,
//   updateVideoTitle
// } from "@/db/test";

export default async function AdminPage() {

//   // You can now use async/await directly
//   try {
//     const folderRes = await createFolder({
//       title: "Test Folder",
//       orgId: "org1",
//       ownerId: "user1",
//     });

//     if (!folderRes || folderRes.length === 0) throw new Error("Folder creation failed");
//     const folderId = folderRes[0].id;

//     const videoRes = await createVideo({
//       rawUrl: "https://example.com/raw.mp4",
//       animUrl: "https://example.com/anim.mp4",
//       thumbUrl: "https://example.com/thumb.jpg",
//       title: "Test Video",
//       description: "Test video description",
//       folderId,
//       ownerId: "user1",
//     });

//     if (!videoRes || videoRes.length === 0) throw new Error("Video creation failed");
//     const videoId = videoRes[0].id;

//     await updateVideoTitle(videoId, "Updated Test Video");
//     await createComment({ videoId, message: "Test comment", commenterId: "user2", isPublic: true, mentionList: [] });
//     await grantAccess({ itemType: "A", itemId: videoId, grantedUser: "user2", grantedBy: "user1", accessLevel: "2" });
//     await logActivity({ action: "Created test video", itemType: "A", itemId: videoId, message: "Activity log", whoDid: "user1" });

//     const videos = await getVideos();
//     console.log("All videos:", videos);
//   } catch (error) {
//     console.error("Error running tests:", error);
//   }

  return (
    <div>
      <h1 className="text-5xl font-bold md:text-6xl">Admin Page</h1>
      <p>Check the server console for database outputs.</p>
    </div>
  );
}