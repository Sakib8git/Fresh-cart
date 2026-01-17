import { connect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

const feedbackCollection = await connect("feedbacks");
export async function GET(request, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.findOne(query);
  return Response.json(result);
}
export async function DELETE(request, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const result = await feedbackCollection.deleteOne(query);
  return Response.json(result);
}
export async function PATCH(request, { params }) {
  const { id } = await params;
  const { messages } = await request.json();
  const query = { _id: new ObjectId(id) };
  const newData = {
    $set: { messages },
  };
  const result = await feedbackCollection.updateOne(query, newData);
  return Response.json(result);
}
