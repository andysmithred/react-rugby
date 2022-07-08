
export const ImageDetails = {
  flagPath: "../../../public/assets/flags/",
  iconsPath: "../../../public/assets/icons/",
  icons: [
    //Main
    {
      // Home
      name: "home-page",
      image: "home-page.png",
    },
    {
      // Major Urban Area
      name: "city",
      image: "city.png",
    },
  ],
  getIconImage: (name) => this.icons.find((icon) => icon.name === name),
  getFullIconPath: (name) =>
    this.iconsPath + (this.getIconImage(name) && this.getIconImage(name).image), // maybe make this a default
  getFullFlagPath: (image) => this.flagPath + image,
};
