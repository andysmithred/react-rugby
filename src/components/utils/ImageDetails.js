// Link to i* website
// https://icons8.com/icon/set/manager/ios-glyphs

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
      // coach
      name: "coach",
      image: "coach.png",
    },
    {
      // competition
      name: "competition",
      image: "competition.png",
    },
    {
      // country
      name: "country",
      image: "country.png",
    },
    {
      // match
      name: "match",
      image: "match.png",
    },
    {
      // match line up
      name: "match-line-up",
      image: "match-line-up.png",
    },
    {
      // match point
      name: "match-point",
      image: "match-point.png",
    },
    {
      // match point
      name: "match-position",
      image: "match-position.png",
    },
    {
      // match team
      name: "match-team",
      image: "match-team.png",
    },
    {
      // penalty-try
      name: "penalty-try",
      image: "penalty-try.png",
    },
    {
      // player
      name: "player",
      image: "player.png",
    },
    {
      // point-type
      name: "point-type",
      image: "point-type.png",
    },
    {
      // position
      name: "position",
      image: "position.png",
    },
    {
      // referee
      name: "referee",
      image: "referee.png",
    },
    {
      // region
      name: "region",
      image: "region.png",
    },
    {
      // school
      name: "school",
      image: "school.png",
    },
    {
      // school type
      name: "school-type",
      image: "school-type.png",
    },
    {
      // season
      name: "season",
      image: "season.png",
    },
    {
      // season-point
      name: "season-point",
      image: "season-point.png",
    },
    {
      // stadium
      name: "stadium",
      image: "stadium.png",
    },
    {
      // team
      name: "team",
      image: "team.png",
    },
    {
      // team-country
      name: "team-country",
      image: "team-country.png",
    },
    {
      // team-player
      name: "team-player",
      image: "team-player.png",
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
    {
      // lock
      name: "lock",
      image: "lock.png"
    },
    {
      // unlock
      name: "unlock",
      image: "unlock.png"
    },
    {
      // forward
      name: "forward",
      image: "forward.png"
    }
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
