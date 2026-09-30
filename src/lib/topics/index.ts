import type { Topic } from "./shared";

// Each category is loaded with a dynamic import, so the bundler emits it as its
// own chunk. None of them are part of the initial page bundle; they are fetched
// in parallel when the Beamten-KI is first needed (see loadEngine).
// Order matters only for ties in findTopic: earlier topics win.
const categoryLoaders: (() => Promise<Topic[]>)[] = [
  () => import("./core").then((m) => m.coreTopics),
  () => import("./housing").then((m) => m.housingTopics),
  () => import("./work").then((m) => m.workTopics),
  () => import("./mobility").then((m) => m.mobilityTopics),
  () => import("./family").then((m) => m.familyTopics),
  () => import("./culture").then((m) => m.cultureTopics),
  () => import("./government").then((m) => m.governmentTopics),
  () => import("./smalltalk").then((m) => m.smalltalkTopics),
  () => import("./shopping").then((m) => m.shoppingTopics),
  () => import("./life").then((m) => m.lifeTopics),
  () => import("./nature").then((m) => m.natureTopics),
  () => import("./places").then((m) => m.placesTopics),
  () => import("./tech").then((m) => m.techTopics),
];

export async function loadAllTopics(): Promise<Topic[]> {
  return (await Promise.all(categoryLoaders.map((load) => load()))).flat();
}
