import { connect } from "@/lib/dbConnect";

export async function GET(request) {
  const feedbackCollection = await connect("feedbacks");
  const result = await feedbackCollection.find().toArray();
  return Response.json(result);
}
// post
export async function POST(request) {
  const data = await request.json();

  if (!data.message || typeof data.message !== "string") {
    return Response.json({
      status: 400,
      message: "Please send a message",
    });
  }
  const feedbackCollection = await connect("feedbacks");
  const newFeedback = { ...data, date: new Date().toISOString() };
  const result = await feedbackCollection.insertOne(newFeedback);
  return Response.json({
    result,
  });
}
