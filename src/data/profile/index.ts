export interface Profile {
  imageURL: string;
  description: {
    primary: string;
    secondary: string;
  };
}

export const profile: Profile = {
  imageURL: "/images/profile/profile.png",
  description: {
    primary: "기록은 나를 빛낸다.😎",
    secondary: "안녕하세요. 좋은 경험을 추구하는 개발자 장호승입니다.",
  },
};