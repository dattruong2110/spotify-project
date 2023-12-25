import React from "react";
import "./SearchPage.scss";
import SideBar from "../side-bar/SideBar";
import HeaderSearchPage from "../header-search-page/HeaderSearchPage";
import FooterPreview from "../footer/FooterPreview";

const SearchPage = () => {
  return (
    <>
      <SideBar />
      <div className="main-search">
        <HeaderSearchPage />
        <div className="search-soptify-playlist">
          <h2>Browse all</h2>
          <div className="list">
            <a href="" className="item-music">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb"
                  className="img-list"
                />
                <span className="span-list">Music</span>
              </div>
            </a>
            <a href="" className="item-podcasts">
              <div>
                <img
                  src="https://i.scdn.co/image/ab6765630000ba8a81f07e1ead0317ee3c285bfa"
                  className="img-list"
                />
                <span className="span-list">Podcasts</span>
              </div>
            </a>
            <a className="item-live-events">
              <div>
                <img
                  src="https://concerts.spotifycdn.com/images/live-events_category-image.jpg"
                  className="img-list"
                />
                <span className="span-list">Live Events</span>
              </div>
            </a>
            <a className="item-made-for-you">
              <div>
                <img
                  src="https://t.scdn.co/images/ea364e99656e46a096ea1df50f581efe"
                  className="img-list"
                />
                <span className="span-list">Made For You</span>
              </div>
            </a>
            <a className="item-new-releases">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67706f000000027ea4d505212b9de1f72c5112"
                  className="img-list"
                />
                <span className="span-list">Releases</span>
              </div>
            </a>
            <a className="item-2023-in-music">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf474a477debc822a3a45c5acb"
                  className="img-list"
                />
                <span className="span-list">2023 In Music</span>
              </div>
            </a>
            <a className="item-merch">
              <div>
                <img
                  src="https://i.scdn.co/image/ab6761700000c52c87ab6b4a0c51593853fe2157"
                  className="img-list"
                />
                <span className="span-list">Merch</span>
              </div>
            </a>
            <a className="item-vietnamses-music">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf55dfb53724670e4db6cee444"
                  className="img-list"
                />
                <span className="span-list">Vietnamese Music</span>
              </div>
            </a>
            <a className="item-pop">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafa862ab80dd85682b37c4e768"
                  className="img-list"
                />
                <span className="span-list">Pop</span>
              </div>
            </a>
            <a className="item-k-pop">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf013ee3c983e6f60bf28bad5a"
                  className="img-list"
                />
                <span className="span-list">K-Pop</span>
              </div>
            </a>
            <a className="item-hip-hop">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf9e3dea60be755ccd97b7351f"
                  className="img-list"
                />
                <span className="span-list">Music</span>
              </div>
            </a>
            <a className="item-podcast-charts">
              <div>
                <img
                  src="https://t.scdn.co/images/7262179db37c498480ef06bfacb60310.jpeg"
                  className="img-list"
                />
                <span className="span-list">Podcast Charts</span>
              </div>
            </a>
            <a className="item-educational">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67656300005f1fd464f18a416c86ede3a235a7"
                  className="img-list"
                />
                <span className="span-list">Educational</span>
              </div>
            </a>
            <a className="item-documentary">
              <div>
                <img
                  src="https://i.scdn.co/image/ab6765630000ba8a2f514cde3ee9501e7ada4cf4"
                  className="img-list"
                />
                <span className="span-list">Documentary</span>
              </div>
            </a>
            <a className="item-comedy">
              <div>
                <img
                  src="https://i.scdn.co/image/ab6765630000ba8a77d267a5accb8911a92668e1"
                  className="img-list"
                />
                <span className="span-list">Comedy</span>
              </div>
            </a>
            <a className="item-charts">
              <div>
                <img
                  src="https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg"
                  className="img-list"
                />
                <span className="span-list">Charts</span>
              </div>
            </a>
            <a className="item-fresh-finds">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafcc1499bbb8565f490858c2bc"
                  className="img-list"
                />
                <span className="span-list">Fresh Finds</span>
              </div>
            </a>
            <a className="item-equal">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf9ed6e364e8839210dc4dbff7"
                  className="img-list"
                />
                <span className="span-list">EQUAL</span>
              </div>
            </a>
            <a className="item-glow">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf50cfe3fbd3a9fb8810da45ea"
                  className="img-list"
                />
                <span className="span-list">GLOW</span>
              </div>
            </a>
            <a className="item-radar">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafe760702de052fbefea27064a"
                  className="img-list"
                />
                <span className="span-list">RADAR</span>
              </div>
            </a>
            <a className="item-discover">
              <div>
                <img
                  src="https://t.scdn.co/images/d0fb2ab104dc4846bdc56d72b0b0d785.jpeg"
                  className="img-list"
                />
                <span className="span-list">Discover</span>
              </div>
            </a>
            <a className="item-karaoke">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf8eb00a9a2c00093ccde516c6"
                  className="img-list"
                />
                <span className="span-list">Karaoke</span>
              </div>
            </a>
            <a className="item-mood">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf271f9d895003c5f5561c1354"
                  className="img-list"
                />
                <span className="span-list">Mood</span>
              </div>
            </a>
            <a className="item-rock">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafae7e69beb88f16969641b53e"
                  className="img-list"
                />
                <span className="span-list">Music</span>
              </div>
            </a>
            <a className="item-latin">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafa59f90c077c9f618fd0dde30"
                  className="img-list"
                />
                <span className="span-list">latin</span>
              </div>
            </a>
            <a className="item-dance-electronic">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafdfdaac1cf9574a196ca25196"
                  className="img-list"
                />
                <span className="span-list">Dance/Electronic</span>
              </div>
            </a>
            <a className="item-indie">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafa1a252e3a815b65778d8c2aa"
                  className="img-list"
                />
                <span className="span-list">Indie</span>
              </div>
            </a>
            <a className="item-workout">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67706f000000029249b35f23fb596b6f006a15"
                  className="img-list"
                />
                <span className="span-list">Workout</span>
              </div>
            </a>
            <a className="item-county">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafc0d2222b4c6441930e1a386e"
                  className="img-list"
                />
                <span className="span-list">County</span>
              </div>
            </a>
            <a className="item-r-b">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caff4e38be86ca48a3b10884ae3"
                  className="img-list"
                />
                <span className="span-list">R&B</span>
              </div>
            </a>
            <a className="item-chill">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf47e942f5bea637f4f4760170"
                  className="img-list"
                />
                <span className="span-list">Chill</span>
              </div>
            </a>
            <a className="item-sleep">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67706f00000002b70e0223f544b1faa2e95ed0"
                  className="img-list"
                />
                <span className="span-list">Sleep</span>
              </div>
            </a>
            <a className="item-party">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafcbf80f8ea695536eace4fd2c"
                  className="img-list"
                />
                <span className="span-list">Party</span>
              </div>
            </a>
            <a className="item-at-home">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafe914a07d20cec7a65e2e5dad"
                  className="img-list"
                />
                <span className="span-list">At Home</span>
              </div>
            </a>
            <a className="item-decades">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caff005a355830c374754d32868"
                  className="img-list"
                />
                <span className="span-list">Decades</span>
              </div>
            </a>
            <a className="item-love">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafb03c6f8e7efca2ae36f41b31"
                  className="img-list"
                />
                <span className="span-list">Love</span>
              </div>
            </a>
            <a className="item-metal">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafefa737b67ec51ec989f5a51d"
                  className="img-list"
                />
                <span className="span-list">Metal</span>
              </div>
            </a>
            <a className="item-jazz">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafe289743024639ea8f202364d"
                  className="img-list"
                />
                <span className="span-list">Jazz</span>
              </div>
            </a>
            <a className="item-trending">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf1867113f5218598847550acd"
                  className="img-list"
                />
                <span className="span-list">Trending</span>
              </div>
            </a>
            <a className="item-classical">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf12809992dfc5b318892ea07b"
                  className="img-list"
                />
                <span className="span-list">Classical</span>
              </div>
            </a>
            <a className="item-flok-acoustic">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafcc70a3c2e4c71398708bdc4a"
                  className="img-list"
                />
                <span className="span-list">Flok & Acoustic</span>
              </div>
            </a>
            <a className="item-focus">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67706f00000002e4eadd417a05b2546e866934"
                  className="img-list"
                />
                <span className="span-list">Focus</span>
              </div>
            </a>
            <a className="item-soul">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafd82e2c83fe100a89e9cbb2a2"
                  className="img-list"
                />
                <span className="span-list">Soul</span>
              </div>
            </a>
            <a className="item-kids-family">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf8a04560a209b3f32165ea8a2"
                  className="img-list"
                />
                <span className="span-list">Kids&Family</span>
              </div>
            </a>
            <a className="item-gaming">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf26dd3719e8824756914ae61f"
                  className="img-list"
                />
                <span className="span-list">Gaming</span>
              </div>
            </a>
            <a className="item-anime">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67706f00000002c19c5f13f8b3ff2d73ff00bc"
                  className="img-list"
                />
                <span className="span-list">Anime</span>
              </div>
            </a>
            <a className="item-tv-movies">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafb4c4523336133ec3c7fd1744"
                  className="img-list"
                />
                <span className="span-list">TV & Movies</span>
              </div>
            </a>
            <a className="item-disney">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf78c17dc5631c053fd95f31bb"
                  className="img-list"
                />
                <span className="span-list">Disney</span>
              </div>
            </a>
            <a className="item-netflix">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf0b0c71c920d6a745461ada69"
                  className="img-list"
                />
                <span className="span-list">Netflix</span>
              </div>
            </a>
            <a className="item-instrumental">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67706f000000028ed1a5002b96c2ea882541b2"
                  className="img-list"
                />
                <span className="span-list">Instrumental</span>
              </div>
            </a>
            <a className="item-wellness">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf8dec632effd9735fa8aba06e"
                  className="img-list"
                />
                <span className="span-list">Wellness</span>
              </div>
            </a>
            <a className="item-punk">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafb2cdd7a95b0a5444aa15cfb5"
                  className="img-list"
                />
                <span className="span-list">Punk</span>
              </div>
            </a>
            <a className="item-ambient">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafa6ee95dc83af715115f40522"
                  className="img-list"
                />
                <span className="span-list">Ambient</span>
              </div>
            </a>
            <a className="item-blues">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caff22ac5cab318d550b593ffac"
                  className="img-list"
                />
                <span className="span-list">Blues</span>
              </div>
            </a>
            <a className="item-cooking-dining">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafe53d71d0920a4f1f441d803c"
                  className="img-list"
                />
                <span className="span-list">Cooking & Dining</span>
              </div>
            </a>
            <a className="item-alternative">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf106e29a9f294cb4265da6af9"
                  className="img-list"
                />
                <span className="span-list">Alternative</span>
              </div>
            </a>
            <a className="item-travel">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf4b36a2c31432ace68d90c4f2"
                  className="img-list"
                />
                <span className="span-list">Travel</span>
              </div>
            </a>
            <a className="item-caribbean">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf8ba1febbb4f77336b6f9aace"
                  className="img-list"
                />
                <span className="span-list">Caribbean</span>
              </div>
            </a>
            <a className="item-afro">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf04faccb4f5e1828600921f37"
                  className="img-list"
                />
                <span className="span-list">Afro</span>
              </div>
            </a>
            <a className="item-songwriters">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafb973ab1288f74f333e7e2e22"
                  className="img-list"
                />
                <span className="span-list">Songwriters</span>
              </div>
            </a>
            <a className="item-nature-noise">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafbbf84e26e69a78883118913c"
                  className="img-list"
                />
                <span className="span-list">Nature & Noise</span>
              </div>
            </a>
            <a className="item-funk-disco">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005cafbb0e4ea229824157eee7467d"
                  className="img-list"
                />
                <span className="span-list">Funk & Disco</span>
              </div>
            </a>
            <a className="item-league-of-legends">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf2b1ff59a971dd399dea96009"
                  className="img-list"
                />
                <span className="span-list">League of Legend</span>
              </div>
            </a>
            <a className="item-spotify-singles">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf14030380532b34badbf0a229"
                  className="img-list"
                />
                <span className="span-list">Spotify Singles</span>
              </div>
            </a>
            <a className="item-summer">
              <div>
                <img
                  src="https://i.scdn.co/image/ab67fb8200005caf097a46192e6bb67e52cdff60"
                  className="img-list"
                />
                <span className="span-list">Summer</span>
              </div>
            </a>
            <a className="item-tastemakers">
              <div>
                <img
                  src="https://t.scdn.co/images/37732285a0ff4e24987cdf5c45bdf31f.png"
                  className="img-list"
                />
                <span className="span-list">Tastamakers</span>
              </div>
            </a>
          </div>
        </div>
        <FooterPreview/>
      </div>
    </>
  );
};

export default SearchPage;
