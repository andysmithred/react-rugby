
export const ImageDetails = {
  flagPath: "../../../assets/flags/",
  iconsPath: "../../../assets/icons/",
  icons: [
    //Main
    {
      // Home
      name: "home",
      image: "home.png",
    },
    {
      // city
      name: "city",
      image: "city.png",
    },
    {
      // region
      name: "region",
      image: "region.png",
    },
    {
      // country
      name: "country",
      image: "country.png",
    },
    {
      // world-map
      name: "world-map",
      image: "world-map.png",
    },
    {
      // information
      name: "info",
      image: "info.png",
    },
  ],
  getIconImage: (name) => this.icons.find((icon) => icon.name === name),
  getFullIconPath: (name) =>
    this.iconsPath + (this.getIconImage(name) && this.getIconImage(name).image), // maybe make this a default
  getFullFlagPath: (image) => this.flagPath + image,
};

export const getImage = (name) =>
  ImageDetails.icons.find((icon) => icon.name === name);

export const getFullPathImage = (name) =>
  ImageDetails.iconsPath + (getImage(name) && getImage(name).image);

export const getFullFlagImage = (image) => ImageDetails.flagPath + image;

