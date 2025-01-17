export type ShareMessageSendLink = {
  RECEIVER_NAME: string;
  RECEIVER_ID: string;
};

export enum CustomShare {
  MESSAGESEND = +import.meta.env.VITE_APP_KAKOTALK_MESSAGESEND_TEMPLATE_ID,
}

export type CustomArgs = Record<keyof typeof CustomShare, any> & {
  MESSAGESEND: ShareMessageSendLink;
};

export function kakaoShareCustom<K extends keyof typeof CustomShare>(
  templateId: K,
  templateArgs: CustomArgs[K],
) {
  window.Kakao.Share.sendCustom({
    templateId: CustomShare[templateId],
    templateArgs,
  });
}
