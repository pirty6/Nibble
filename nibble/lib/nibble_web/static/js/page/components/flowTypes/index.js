//@flow

export type TopbarPageLink = {
  title: string,
  link: string,
}

export type TopbarProps = {
  slide: boolean,
  links: Array<TopbarPageLink>,
  toggle: Function,
  goToPage: Function,
}
