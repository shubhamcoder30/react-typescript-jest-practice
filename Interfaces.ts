export interface Iface {
  name: string;
  profile: string;
}
export interface arrface {
  holdname: string;
  holdProfile: string;
}
export interface props {
  submit: (emp: Iface) => any;
}
