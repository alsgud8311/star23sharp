type ShareMessageSendProps = {
  receiverId: string;
  receiverName: string;
};
export default function shareMessageSend({
  receiverName,
  receiverId,
}: ShareMessageSendProps) {
  window.Kakao.Share.sendCustom({
    templateId: +import.meta.env.VITE_APP_KAKOTALK_MESSAGESEND_TEMPLATE_ID,
    templateArgs: {
      RECEIVER_NAME: receiverName,
      RECEIVER_ID: receiverId,
    },
  });
}
