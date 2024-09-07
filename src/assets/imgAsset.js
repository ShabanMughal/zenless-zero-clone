import logo from "./images/logo.png";
import nav1 from "./images/sociallinks-icon.png";
import nav2 from "./images/music-icon.png";
import nav3 from "./images/share-icon.png";
import nav4 from "./images/cart-icon.png";
import nav5 from "./images/globe-icon.png";
import nav6 from "./images/home-icon.png";
import mute from "./images/mute-icon.png";
import terms from "./images/hero-terms.png";
import Mic from "./images/mic-icon.png";
import banner from "./images/hero-banner.png";
import download1 from "./images/download-1.png";
import download2 from "./images/download-2.png";
import download3 from "./images/download-3.png";
import download4 from "./images/download-4.png";
import download5 from "./images/download-5.png";
import decor from "./images/download-dec.png";
import btn2 from "./images/download-btn2.png";
import btn from "./images/download-btn.png";
import Arrow from "./images/left-arrow.png";
import Terms from "./images/hero-terms.png";
import video_cover from "./images/video-cover.png";
import Jane from "./images/jane.png";
import jane_cover from "./images/jane-cover.png";
import jane_bg from "./images/jane-bg.jpg";
import jane_name from "./images/jane-name.png";
import jane_names from "./images/jane-names.png";
import jane_gif from "./images/jane-cover.gif";
import cut_paper from "./images/cut-bg.png";
import jane_audio from "./audio/jane-audio.mp3";
import jane_icon from "./images/char-jane.png";
import jane_icon2 from "./images/char-jane2.png";
import qingyi_icon from "./images/char-qingyi.png";
import qingyi_icon2 from "./images/char-qingyi2.png";
import seth_icon from "./images/char-seth.png";
import seth_icon2 from "./images/char-seth2.png";
import qingyi from "./images/qingyi.png";
import qingyi_cover from "./images/qingyi-cover.png";
import qingyi_bg from "./images/qingyi-bg.jpg";
import qingyi_name from "./images/qingyi-name.png";
import qingyi_names from "./images/qingyi-names.png";
import qingyi_gif from "./images/qingyi-cover.gif";
import qingyi_audio from "./audio/qingyi-audio.mp3";
import seth from "./images/seth.png";
import seth_cover from "./images/seth-cover.png";
import seth_bg from "./images/seth-bg.jpg";
import seth_name from "./images/seth-name.png";
import seth_names from "./images/seth-names.png";
import seth_gif from "./images/seth-cover.gif";
import seth_audio from "./audio/seth-audio.mp3";
import jane_video from "./video/jane-video.mp4";
import qingyi_video from "./video/qingyi-video.mp4";
import seth_video from "./video/seth-video.mp4";
import event_bg from "./images/event-bg.jpg";
import tv_frame from "./images/tv-frame.png";
import slide1 from "./images/slider-1.png";
import slide2 from "./images/slider-2.png";
import slide3 from "./images/slider-3.png";
import slide4 from "./images/slider-4.png";
import slide5 from "./images/slider-5.png";
import slide6 from "./images/slider-6.png";
import item1 from "./images/item-1.png";
import item2 from "./images/item-2.png";
import item3 from "./images/item-3.png";
import item4 from "./images/item-4.png";
import item5 from "./images/item-5.png";
import item_null from "./images/item-null.png";
import event_back from "./images/event-back.png";
import event_next from "./images/event-next.png";
import reel from "./video/reel-1.mp4";
import reel2 from "./video/reel-2.mp4";
import reel3 from "./video/reel-3.mp4";
import reel4 from "./video/reel-4.mp4";
import reel5 from "./video/reel-5.mp4";
import reel6 from "./video/reel-6.mp4";
import reel8 from "./video/reel-8.mp4";
import reel_frame from "./images/reel-frame.png";

export const imgAssets = {
  tv_frame,
  reel_frame,
  event_back,
  reel,
  event_next,
  event_bg,
  nav1,
  nav2,
  nav3,
  nav4,
  nav5,
  nav6,
  mute,
  logo,
  banner,
  terms,
  download1,
  download2,
  download3,
  download4,
  download5,
  decor,
  btn2,
  btn,
  Arrow,
  Terms,
  video_cover,
  Mic,
  qingyi_bg,
  qingyi_icon,
  jane_icon,
  seth_icon,
};

export const characters = [
  {
    id: 1,
    text: "Qingyi",
    desc: "Criminal Investigation Special Response Team",
    name: qingyi_names,
    shadow: qingyi_name,
    bg: qingyi_bg,
    char: qingyi,
    cover: qingyi_cover,
    gif: qingyi_gif,
    fold: cut_paper,
    audio: qingyi_audio,
    video: qingyi_video,
    nav1: qingyi_icon,
    nav2: jane_icon2,
    nav3: seth_icon2,
  },
  {
    id: 2,
    text: "Jane",
    desc: "Criminal Investigation Special Response Team",
    name: jane_names,
    shadow: jane_name,
    bg: jane_bg,
    char: Jane,
    cover: jane_cover,
    gif: jane_gif,
    fold: cut_paper,
    audio: jane_audio,
    video: jane_video,
    nav1: qingyi_icon2,
    nav2: jane_icon,
    nav3: seth_icon2,
  },
  {
    id: 3,
    text: "Seth",
    desc: "Criminal Investigation Special Response Team",
    name: seth_names,
    shadow: seth_name,
    bg: seth_bg,
    char: seth,
    cover: seth_cover,
    gif: seth_gif,
    fold: cut_paper,
    audio: seth_audio,
    video: seth_video,
    nav1: qingyi_icon2,
    nav2: jane_icon2,
    nav3: seth_icon,
  },
];

export const event = [
  {
    id: 1,
    slide: slide1,
    item1: item1,
    item2: item2,
    item3: item_null,
    item4: item_null,
  },
  {
    id: 2,
    slide: slide2,
    item1: item3,
    item2: item2,
    item3: item1,
    item4: item_null,
  },
  {
    id: 3,
    slide: slide3,
    item1: item1,
    item2: item2,
    item3: item3,
    item4: item4,
  },
  {
    id: 4,
    slide: slide4,
    item1: item5,
    item2: item1,
    item3: item3,
    item4: item_null,
  },
  {
    id: 5,
    slide: slide5,
    item1: item5,
    item2: item_null,
    item3: item_null,
    item4: item_null,
  },
  {
    id: 6,
    slide: slide6,
    item1: item1,
    item2: item2,
    item3: item4,
    item4: item5,
  },
];

export const reels = [
  {
    reel: reel,
    name: "Qingyi",
    occup:
      "Works for Gentle House (organization that assists with dangerous Hollow exploration)",
    char: `Qingyi's character adds balance to roaster, offering a thoughtful and calculated approach to combat
    and mission planning. If you likecharacters that bring mix of brains and skill to the battlefoeld, she
    would be a compelling choice!`,
    edit: "thunder senpai",
    app: "Alight motion",
  },
  {
    reel: reel2,
    name: "Jane",
    occup: "Member of the Gentle House",
    char: `Jane is refreshing addition to the Zenless Zone Zero roaster, perfectfor players who enjoy
    of fun. If you like hight-energy, fast characters who dont take things too seriously but are serious
    when it counts, Jane could be a favorite!`,
    edit: "thunder senpai",
    app: "Alight motion",
  },
  {
    reel: reel3,
    name: "Seth",
    occup: "Member of the Genltle House",
    char: `Seth adds a darker, more intense element to the team, ideal for players who enjoy characters with
    depth, mystery, and a sharp edge in combat. If you're into characters who relaey on skill and intelligence,
    rather than brute force, Seth could be a standout`,
    edit: "thunder senpai",
    app: "Alight motion",
  },
  {
    reel: reel4,
    name: "Jane",
    occup: "Member of the Gentle House",
    char: `Jane is refreshing addition to the Zenless Zone Zero roaster, perfectfor players who enjoy
    of fun. If you like hight-energy, fast characters who dont take things too seriously but are serious
    when it counts, Jane could be a favorite!`,
    edit: "thunder senpai",
    app: "Alight motion",
  },
  {
    reel: reel5,
    name: "Qingyi",
    occup:
      "Works for Gentle House (organization that assists with dangerous Hollow exploration)",
    char: `Qingyi's character adds balance to roaster, offering a thoughtful and calculated approach to combat
    and mission planning. If you likecharacters that bring mix of brains and skill to the battlefoeld, she
    would be a compelling choice!`,
    edit: "thunder senpai",
    app: "Alight motion",
  },
  {
    reel: reel6,
    name: "Seth and Jane",
    occup: "Member of the Genltle House",
    char: `Seth adds a darker, more intense element to the team, ideal for players who enjoy characters with
    depth, mystery, and a sharp edge in combat. If you're into characters who relaey on skill and intelligence,
    rather than brute force, Seth could be a standout`,
    edit: "thunder senpai",
    app: "Alight motion",
  },
  {
    reel: reel8,
    name: "Anton Ivanov",
    occup: `Mercenary (part of Gentle House organization)`,
    char: `Anton lvanov brings a seasoned warrior vibe to the game, adding depth to the roaster of
    diverse characters players can enagage with. If you're into playing strong, dependable characters, he might
    be one to look forward to!`,
    edit: "thunder senpai",
    app: "Alight motion",
  },
];
