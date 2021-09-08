export interface Iface {
  name: string;
  profile: string;
}
export interface arrface {
  holdname: string;
  holdProfile: string;
}
export interface props {
  arr: arrface[];
  setArr: React.Dispatch<React.SetStateAction<arrface[]>>;
}
