import { instance } from "@/api";
import { Message } from "@/types/message";

type MessageList = {
  page: number;
  size: number;
  total_pages: number;
  total_messages: number;
  messages: Message[];
};
export async function getMessageList(page: number): Promise<MessageList> {
  const { data } = await instance.get(`/message/get/received/all?page=${page}`);
  return data;
}

export async function getMessageDetail(messageId: string): Promise<Message> {
  const { data } = await instance.get(`/message/get/received/${messageId}`);
  return data;
}
export type MessageTitle = {
  title: string;
};
export async function getMessageTitle(
  room_signature: string,
): Promise<MessageTitle> {
  const { data } = await instance.get(`/room/get/title?room=${room_signature}`);
  return data;
}

export type CreateMessageRoomResponse = {
  room_signature: string;
  access_token: string;
};

export type CreateMessageRoomRequest = {
  title: string;
  password: string;
};
export async function createMessageRoom({
  title,
  password,
}: CreateMessageRoomRequest): Promise<CreateMessageRoomResponse> {
  const { data } = await instance.post("/room/create", { title, password });
  return data;
}

export type SendMessageRequest = {
  room_signature: string;
  sender: string;
  body: string;
};
export function sendMessage({
  room_signature,
  sender,
  body,
}: SendMessageRequest) {
  return instance.post("/message/create", { room_signature, sender, body });
}

export function deleteMessage(messageId: string) {
  return instance.delete(`/message/delete/${messageId}`);
}
