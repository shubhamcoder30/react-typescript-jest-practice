export interface Iface {
  name: string;
  profile: string;
}

export interface props {
  submit: (emp: Iface) => any;
}
