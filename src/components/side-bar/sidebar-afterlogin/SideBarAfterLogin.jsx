/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./SideBarAfterLogin.scss";
import { Form } from "react-bootstrap";

const SideBarAfterLogin = () => {
  return (
    <>
      <div className="sidebarafterlogin">
        <div class="navigation">
          <ul>
            <li>
              <a href="#">
                <span class="fa fa-home"></span>
                <span>Home</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span class="fa fa-search"></span>
                <span>Search</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="navigation">
          <ul>
            <li>
              <a href="#">
                <span class="fa fas fa-book"></span>
                <span>Your Library</span>
              </a>
              <a>
                <i class="fa-solid fa-plus plus-your-library"></i>
              </a>
              <a>
                <i class="fa-solid fa-arrow-right arrow-your-library"></i>
              </a>
            </li>

            <li>
              <a href="#">
                <span class="fa fas fa-heart"></span>
                <span>Liked Songs</span>
              </a>
            </li>
          </ul>

          <div class="like-artists">
            <a href="#" class="like-artist">
              <span class="like-artist__img">
                <img
                  src="https://yt3.googleusercontent.com/BFZVpnsYdUinXATWqFv_TehfKUw_uVila1n_bLh02PJnmvf0lNiCAldtoeqvD2uiFx6hUWof=s900-c-k-c0x00ffffff-no-rj"
                  alt="image-artist"
                />
              </span>

              <span class="like-artist__name">RPT MCK</span>
            </a>

            <a href="#" class="like-artist">
              <span class="like-artist__img">
                <img
                  src="https://avatar-ex-swe.nixcdn.com/singer/avatar/2022/08/01/b/e/a/1/1659321743301_600.jpg"
                  alt="image-artist"
                />
              </span>

              <span class="like-artist__name">GREY D</span>
            </a>

            <a href="#" class="like-artist">
              <span class="like-artist__img">
                <img
                  src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXGRcVGBcXFxgYFxcXFxUXFxUXFxcYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGy0lHyUtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABKEAABAwIDBQUFBQMJBQkAAAABAAIRAyEEEjEFBkFRYRMicYGRBzKhsfAUI0JSwWJy0RUWMzRzgrPh8VODk8LSJDVDRHSSorLD/8QAGwEAAgMBAQEAAAAAAAAAAAAAAAMBAgQFBgf/xAA1EQACAQIDBAgFBAIDAAAAAAAAAQIDEQQSITFBUWETFHGBkaGx8CIyM8HRBVLh8QY0I1Ni/9oADAMBAAIRAxEAPwC/oSpbAmKYTwXzWbPYTdxedScPSUWky6saIhJqO2wz1XZaDzAsp7VnRs6r1gfFa0Ln/toxuXBtpzd7xboLlN/TYOeMpJfuXlqYKr+Fvk/Q4ggjRL6WcYMuuTzvpzQRIIAMjjPl4f6/BFKNEgASlPaLQQZANpsTqL8QkoQgAIIwiQAEEJQCAAggggAIIIIACepvAGiRI69fHp0TjQFDGU730DdVEe6iZU6fED/VE+EkhVshjnK+0fdUngnKdTkEzTI5p6k5oCo9mhqpSbd3JeQ3J5H4oJ3M1Eo7g6NfuPQlIJ3Km2p9gXzqR2pB0ad1Ma1NsCfppE3czTlcU0rintk2r2mKbSB7tMTH7R+iutbw7TbhqD6rjAaDHjwXm7aOMNaq+q+SXknXSdPEBeg/xzCZ6zrvZHRdr/CMGLnanbe/TeREaCC9mcsMRBvfhre/wQDdOvMgepOnikoIACCBRoAKUEEaACQRokAHKMIkAglAKJGSiQDAEEEaCCXhaE3KkOoCQENi4d9Z+Rt7LRjdWrrB9VmnK0rM6dGVLJZIzzsM2Be8xlg6RrOmsiOilVMHYCNVbs3Yq6hpT7d2qxOjkt3drGmnXpRvdbfQpPsXQaAegAHyCIYM8lqGbpPPF6W7dGpES9Vyz4j1i8N+30Ml2H7KJaf+ZlTm74I1bJIjrlHh5I6hTan2NSYTjSvn0mOkxxpS3V2saXOMACSVHxOKZTbme4NA4krj+/m/D67nUaJy0hYni7/JacF+n1MZUyx0W98P5MtapGEby/sje0be84yr2dNx7Fno4jj4LFQlQiXv8Ph4YemqVNaI4lSo5yzMJBGAiTigponloTcxoJtPHpxSUESADA8Pr5lEgjQAqlULTIOoLdAbEQdUhGiQAaIII0AEjCCNrUMlbQihCNyLKdef6IQPaEggggg0e5E9uSDeF1LBB5EyFzDcOs1tZxcDGXgun4LFUTpKxVvqeBto/J4ljSoO6KXTou5BMUH0+Z+KnUsnNXiDHGUXcgngx35QiYG/m+KeDR+ZMsUbEdmfyhBOx+0gpsVK/GV2UxLnADqVld4N/aGHEMPaPOgBsPErkmL2pWq2fVe4cibKCuFh/wDHqcbOtLNyWi/Jsn+o6WhHvf4LneHeWvi3EvcQ3gwGwVKUEF36dOFOKhBWSOdOcpyzSd2JRJSSVcoJIRygjA6hABE9I+XxRI0AEAEgjQCACQQRoADhFiCD/G4RIz1RIACU1JRoJQbhyRSgggG7glCEESCDTbiOis6091dT2e4Ae4FzD2f5e2dmdl7v8V0/DxECoIWKt9Rm2j8niWNPEN/KptKoPyfBZ7HY5mGa0nvTyuodD2j4XTMR5K8UyWbUFv5fgnmuZyWRo+0LBn/xQPFarBYrtGB7ILTcHmmCx3u8kErvcgggqeYCklLSU4ziUSUiIQARCSQlQiKAEokaCAAAhKCKEACEEaKEAEjaFMwuGtmcCQdBpPWVa4cMgWDWjW3x1N1Sc8u4bClm32KBzOiSR9FXlUt7wALriHHh0I0mQm6mBFQ5g+ARLraW0HNVVVLaWdDhqUyU1S8Xh2taCCZJMSIMaeGqisKve6F5csrMQhCU5xMdNOgkn5k+qSrFA4Q+vr64IISgDTbhhnbOziRlXT8K2jEBq5luBTms7T3V06hSdEWWSr85ro/IVm9DWZW5QdHaeC5OxgjRdg2vSIAn8r/0XKG3aenyTKewrU+Ze95HGGaWkz3rQImZ1vwj9V3zcthGDojNHdFlwimLWXddz4+yUpBnKFaQui9GX8H86CbhvJBQMseaCPrkkwlpKaZhMok4IggiSYgzpe9uKRCkBMIoSyEkhACUSUhCAEkIoS4SYQAHAfXPkncHTLntaACSQOH6plXO6kdsSRJDDkESc5LQ23HVStWTFXZaU8C6rADXTJBgEwOevANPxU6lsUhryWkNaGAixsTmM3962llv8TujVFKlS7c0wzKS2k4tNSo4HtHVD+ISWta3gGCTeA9QbgaTPsbq4dUqhjySRlcS3uFpHdk621KwYqslmy7ltXHg+3jfQ7GHpwspS3+7/fnsORY3JTfkDs7PzAQT4g8f4qLUqQbRl4R+o+K6Pitzawd9w4AAZY7Nru9Nyc3vcoNvmoW0NzHPY5/Ztp1mtNmf0dRwk2Bu2eR06hY4/qFFWbenH8qy8rlqmEk75bctnk7t9zSMVQc2o0h2jRy0aLW6qkrNhzgNAT6TZWdKWl3O4PnII6GfkoW0R94e7AIBHhFiupDSTRzKrvFN7SIjQQTjOGgjbon3sJZmi2iq2XUNLl5uIyazrxZdSw9CRZ59Vy/cRhNZ2p7q6XhdLgpFRfEPo/KM7aYQBLp7r/0XKaDO4SupbbsAQHHuuFhOq5i3B1Wtg03j+6VeGiCd8ysJHuruO6byMJSt+ELiBBDYII8Qu27ph32Wl3vwhTIVRi4qV+Jd9qfyoJMO5hBVHHmsok5lSItqOFrydbjhaPiOsOMrVhKLL4fXzS2tSD9aIuDVlcTCJKIRFSQJhCEaAQARSYTj0hQiZbQlsfZFQa/auHzAkNFR8ASMzWEtLuQBgzzAWPldB9jNJxxNUsBLmiiYEe527e0MngArLaTFXZusbRqPxFSpVzOgOq06LSWy1rnNaXu0a3uOJ8gJJWEqYelWq5jh2PA92nQquZkGpDGwGi8mJuSea7Xto0qVN9SoQARlN4kXgT5n1XHsBjcD2kijkdNnEn4LnY2LoR/409W27fezT8DvUJxrfPa2iV/tdNffmL/ld2HIqUKlRzC7Kc85uHvTx4EdFtKG221GXF41Wb2yZLXMdma4d4EqXgWsawucCWgSWgSSAJIAGs8l56s4zpppWb05vdZ6LXuV1Y6EYK95bre+xnLsbWms50Rne544TmJNvVQdqul45BoA8BbyWvw+IJoV3uNZzKdUsDaoF2O7RwzSJbUEMFtCRCxGJcS4uPG69Rh55rq1racefpY85iY5YqSd1LX3t3jSCCNaTEOimYlONqGC3hrCS58jwTb3yl7R7ajsNBuO9wrOynguo4E1CBcFcm3V2g2jULi3MIiy3GD3qo8Wual1PmH0KU5QukbSmHflCeHWmPQLPYfejDW+9cPFWWG3gw7tKw81W6LOlNbU/AsamDpH3qLT/dCkUm0wA0CBwCj0tpUzpVYfNSWYoHQtPmFNyjT3i+7zKCPteg9QjRcg875O6VFVq7D/AHRdIVWQmwd7i8RDLlXIfw1OQVGcLrQ7rbO7UVT+UfOY+RVFiWw5w6qsal6ko8LeZarTtQhNb7jJQSgfj9fojaySm3MyVxpO4anmcAmyFcbq4MVa4aq1JZYORamrySK3GU4N1FK0u+WBFN4ygx1WcVaM88FItWVpiZVvsPb1XBy+g7K92Zr+rIYWDycHH0VSp2wdlnFYmjh2nKaz205icoce86Ogk+SaKvbU75tLCV8dhaT39wVaVOrkF4e9gdlPGASuR7VoPoVTSq08roB8jofmu5sx7KbhRm1ICJPBjIv1sFyn2i0+0xtN0XeymY5gyRKpXpRXxs6UHNJIosJXe4gNJ6clZ7axtXDtYS7KG24S+o5ptHINJvEXKu8DlqU252AObbhxus37TKnew7CbBr3eZLQPkVw6VVVsRGm4rfffufqvC/I6dZSo0HJS105b/wCSg21vJVxRHa5WtF8jAQ2YiTe54KiJSspSV26dONOOWCsjz1SpKbvN3YSCVlS2t6A669RH14K9xdrl/szdovaHPeA0iesLS7N3RwdsxLvHRZ7CbfDWtaQRAhaXB7UpuYwNcJOq4uJlid7aXL3c69GFBrSzZpMLuzhw3uhoHgnTuphzq1hUGrjA2hmLrAqK3HVQQ8U3uYdC0ysEVN6pvx/LNF7aXLR25uG/IR4Jl+5FE+6XBO7I2vULxNOoB1CunYqteAelkOpUjpdl1Ka2MzTvZ878NY+aS/crEt92r8StcMXUa0Ej4KS3aHczceSssRO20jpqq5mF/mrjf9qfUoLb/wArIlHWJ8fIv00/2rwPPfamMvBIaySAOKMonNgkcjGoIkdRY+IXqDzjbe0scBtOrhS9rSO8IPH0VZUeSSTqboFEVChFScktXtLOpJxUW9FsQlBGiViglWm7u1H4ar2jGZrXEcFWJ/Z1OrUfkoNe97rZabS5xHHugE+aiUVJWewlOzuWG8u8DsW4EtDQOAVIt5sz2W42pBqmnh2/tuzv/wDYyR6uC1myfZpgqMOql+Id+0clOf3G3PmSFnlWo0Flbty3jo0atV3scj2VsutiXinQpuqPNoaLDq52jR1JAXctyN02bMax7ofXe+m2pU4BrnhvZs4homSeJHCwF9s2pTotDWNaynoGsaGtEdBZDa+IAbBMEmyKeMhKlKot273xRphhLSSlvKL2ibp1KjzisI4sqx940OLW1IHvRoH9ePHmudbVxVas+nUrCH0w1h7uUww/iB0PA2XW9u7106dFmnbVBGX8sGHOPTlz8isLtek19O3vtl082gSW/wB0AkeY5KMVWWjg7pq74W/rUbhaMrNT3aLtDp4gCpeGtLQSTYCOPIKTtzd/7fs51ZvdIeHUCR77YyXm4a9zreDT0VHu/s/7XV+/LhhqWU1MoPEnKDFwDlMnh5rrW1aTPszGUoyOdSa2LgNDgbeAafRceNDoXnT+KK8OHbfea8RW6T4LfC37/KR5adIkGRzB5jgRzSQF3XfL2YU8U/tqDxRqm7gQXMeY1IGh6j0XMtq7iYzDuipTkTZ7O9TPg7UHo4ArswxVOSu9HwfvU4roTvZamZptJMcSrwbs14BGUjxU/Bbi133MN6larY26lSnH3xI4hZ8RjIxXwSXhc0UcL/2LzMZR3SxB4Aeas8LuFiTBDmjzWvxWzaoMtM9E/SxlWm3vNlYJY+s9jXgaup0ktPUyuK3KxpbkNUOaeAKuNjbCxuHpluYZRoHHRWr95GAHMIMcOCzdTe972vabmLEFCqVasbNK3ZYlUckk3c2WwTUbOdmY8cplaWlXY4X7sazZcmwe9VWh94Q4Bw8rLP7wb51sSRDnMA5GJRTwU3KyWnErXrQWt/s/wdwx21qDB3qrR5hV43mwEXqhcGrOcbue53iSjaeYWjqK2t37jJ1rgvM7l/OrZ3+0CC4TnbyRKeoU/aX5LdYl7Ysokool1jCIQSkTkAIhFCUgQpAmbCwJr4mhRAntKtNpH7JcM/llk+S9CbTrNwrppta0FolrWhoLW2AsNADZcU9mjJ2phejnn0o1F23eCnnouc25ZfrEQ4HxEqtajKpRlkdpbV2rXz2GjDTUKictj0fvzK+htAvudD9apOKxVoFz4xy9VRbMrHs8xP4nM8C0NPxDgfBKZVNR54ADXTqOJm8ei8pUhOMnm7fE9BGz1Qh2HxjajiKo7B3fDXiXjmG/s2NyfKye7V+pPIXOnAQDdTHYztabXHUiCOR0cDbmCq7EAAW63NvIHj/mUZm3bu009PfncgtCi2/s+pTjEGpnD6hvxZxYJ42bHD3Uzg8WXAgkyZBMwbiJ9CthhqDK9Hs3iW5vl3gQfEpo7lZqrTROWmdZMlkDrr0W/DYtSjkmtVps8DPOnkle+hldzce/D4h7SztKL/u67I1EkAj9qZgcZPiNrs3bVL7RVw1Ml1LOKlE3dlIZDxe8S4jyS9s7Pp4dzKdKGl0uJtLqhkZnHjoB5ql3T2SGdnWJlzgYGga0G4PUkD0S69VNO6s9i7X9tPIiFNWTW/7e/M6AyvMAmI18tSm24oP7zQYNrizuoGsfNQ6vO49eHDmio4nMHTfLx8bAEc79Fl6VkKkhWJ2VTeJEsP7Nwf7p/SFT7XnDtzVJyaZ2iR0n8vmp38qgGNeH6KwGOBb3gYi414T9eStGcHtCUJRMO7bVGCcztFiN495y+W0ycp6p72hYtrMfVbTgNIY5wFgHlgL4jnY+JKxr3guJ4cl1sNhI6Te/VGStXsrLvJ1batR7YJPiEzhswMiYNpUeo8ttoOSIV7Qug7tGZ15SlmqNtrmT62JqGGEkjgOSjOwxmJBTBNpBkomVVGW3yipSTepKqNLDcqXWJ7MPyiNA6f0ULG1Glwgza6akZRe/LgqZbpNg7RlJIHaH6CCRm6IJmUUTkS0tDd+m0/e1J6NVhQwOGb7ov+1dIljKa2XZpjhZvboY5mGe7RpPkidhnj8LvRbt9XgCI6QmKjTwcEnrr/b6jupr9xiTQd+U+im4HYlaq3M1hjTRaN9Rw1j0Clt2y9rAxunQKZ4qo18KQRwsE7t3LT2T7CfQxFapUp97sgGHlLxnHQnu36HmtjtrFgEuY7LUg90/jEXAGjtNFW+zqq9/bueSbUwOn9IT+nom96KdUk5Qxw1LXWB14kFp4ax4rfQqTeHVR238t73q9vC3HiVyR6RwX58Vv7tSiwQJZXgjWnVAbMCCaTtbg99gPRjU5ha+W/PVM7Eb9+6iab6RrUarcriS0uaBUaWOM/k0kpDKktga/wAbEQVy/wBQgpqFTc1Z7Nz5ab9xvwk7Zo8H69upNweLIe6nYh33jbcTZ7R53P7yLEOOh/0PFV2KxHZ5KgN2OE/ukw79D5LQbQpBze2acwOsjy89Fy5wytPj6r+Ld5rjLavevtj2xxABmztOhbIPzatDu5iAO1zOnvAgakSL/FUOx2TRHNtSRzgyD8gpOz9oUqZOcDOHO1McbSl07xq398CJrPBoj73MfUxNAUocTTzA8AM+pPAJ7Z+H7NzaczkkTwu7WP8AVXdXEtflcAILZt4lUWzasve6bzY35/XqprSzNLh7+5WndQ1LV1QSSeJnQX8E1iq8ANMX6EGBHqLjXSCmjiwXX16AeGmgTbwS9xBmAGg8Z4+cpV9rDLxKrFO79jb49flx4KXiK7h2Yn3/AJNjj6KvxdMh031424/Wid7WcQxpuGsAA6nvEj4KyVxj0scs34YW4+vINy1wniHMaQR0WeK2PtSn7aCeNGmfi8foscvT4aWajB8keexGlSUebCKJwRoFaBAQQRwhktKjYAowAIlCmJKcpvBaWkeCfpMECG3VWxsYZmthHyhBWHZu/L8ESrnjxGdA/f8AZcO2kPFIOPaVVolXoIkdZmXDNpNCbqbWH5T6qqREI6CBDxMye/aU8/VB+13fhACr4RK3Qw4FXWm952H2N1XVMNiS4z96APKm0/8AN8Vpdqsa2m5z2kgC/C3Q8fRZ72JN/wCw1/8A1Dv8Gh/FW2+dcNY2kAS4nMY5WInzWqU1SouS3Ibh05zSZh9r45w7OsyQaVRr2iZgTBHheETscwlxFpJIB4TeP80e1WgsLTqQbeSzrastDuYXIw0VVo5HudzoVpunVzLevQtKlYVS5k6iD5rQ7oY8Op9k4XbIPO3E+X1ZY7D18jTHvH6lTdgYosqtH5jOsX8fAlFfCp0ZRW7Vd35RSnX+NN79PwdK2YwNZUjQQb+Xw/gsWxrqr3PscznH1cStZinkYSu6PwOdPHQE/LVUuw6FMMlxILWgkeIlcmEskHJbXp6m5JOTuT8Ji208O+/eEiOWvFJ2O4ht+kjyk/qo+1Hfdho6BHgtDr9c+XFJfy3GsuHUWXzg270i2Ug8THy5+Sp8BgCHmqHM70ye+C6TN7Ea/NT9vYsCmxrTd0a6w0DXxKg4d8ujkATwiRyVknFO3tClrqyyc2KbqZgy5hB4xmGYCenTmqfCVc9aoRo1xHM27v6KdjcXkpOeToNOJMjL8YUfZGEjLVbdjxDhoQeqlfLdk7zB+1OmftVOpwfSAHix7wR6FvqsYBK3/tYpQcP/AL4f4ULABegwTvh49/q0cLFpKvL3uQcc0AECUbKhC1CLoVnAEAfxSCbQkopRYM7tYULQU7RrxeVHQiyhoIyaehP/AJQPMoKvkolXool+mnxLmEMqnCqAPdRMdxhGfkW6JcSCW9EWVT3Pk6WRPqcICMz4EdEuJAASYU9roHBE0zeyM/IOi3XOtexZ4GAq6CMQ+f8AhUdUnerHF1bK0HK0eE9ZTXsrqTgsSwAOPbTEwIdRpxmPASwp/H4BgcX18QHONgym2G9BczGiMW74Y1YSNqhl8e+nxblN9P1WZwxs4cif4rRbd21JLKTGsAsXAd4wIJngs1QN3LJhIyjC7Vr87/0MxM1KatzHwn8fQNLIdePmNQjwTJeB1nyElTttAGlroRAvN5np/qnOrllFcRahmhKXA2D8QDsqqRpkIuZ94gW9VQ7LwleIeCGiI048+PFTd1MS1+BdTfcNq02kT+EvadOUSPJaLaOKYW6X+v8AJcKtN0m6SS2vb5WOlS+N5yixz5IHKE7hsO4m0KNUfJjmQrDBCDrxgQdeZE62SGrRNDZW7dDu1BMgCGjSbSdLQJ/XwT+yauZ9YzADgI6hsGDrz4qftXDh5Y60XB8gD6qs3epnIT+ZxPjJn+CdmXR9mnncSr5vMh72Y2wpjjL3X8hfxzH0VxujUc6gWAnM05gJ1EcFhto43tq1V40nK391th66+a227DD2DHi5HK/SD6J9enkopPbv71cTSmpzbXvUy3td/wDK/wC+/wDyXPCuu7+sDn0bAjK834Tk/gshi8M0FndaO9wWzCYlQpxhbj6sx4jDuc3O/D0SMhCC3VXB08p7o0PBNYHB0iwEt+Cb16Nr5RXU3f5jEoQtkcJR7UgtEQCm8ZhaAAho1V1jYtpZWR1N22ox5Rytn9mw/wCUJrCYfDxdomVHXVa+Vk9SfFGP+tUFufs2G/KEFHXl+1h1KXEoCUC5AoLaY7sKUUpSSgLhSilBBAXZvPZbLxjaDXEGpSpvEGDFOoQ6P+KEeN2XiA4lp7Yc2OGa3NpvPgovshrhu0QD+OjVYPHuVPlTK3G3cLWZWe4ZAwmLgSSNRp+0OPLok4rPGl0kHs2p7LcdNU0bcI1N5H4o5/Wq03gtqgsePxRDvB7TGbxsVUvpOpPh2jhLTwcOYXQsfjgwSaXaxxFOw8Df4LE7fxprQYjvWHKRcfALHha0qj0jaL5+i2jsTTUVdv4lyevb77Sbsin3S/ie6PAQZ9fknNqu+6I8f0PpZHhWFoazkPjF/iUrarpAA5fUobvNPn6DUrU7cvMhbCxxph7fwuyuPix0gj1K1DMaKsZTNviT/kFkdkUC97Gh2UkhsxMZjy9VtqOzWYcOfmLuAnj10Wf9RVNT/wDTX8F8C5OFtxDrkNIbN1P2NUzV8kSA29pEki+lvwhU9Og6pVDy4e8Ggce8Y/VTcCTTxThNib+sfOFmcVbi7ee/yNDk795d7Spw0tgtsQNPxeAniOapdtYkYfCvIs49xsfmeDBvyF/JabaIloNp49eUxroCuee0GtHZU5nV56cGj/7eqjDU1UqqG69+5C6tTJSct5Q4Ed1b7cquRRMWg+NjPBYTBe6tVuPtHLUNJwmm4ebTzC6GMi5QfLUy4aSi0uRG9peKIqUACB3Hm2kFzQD/APErGVsUTF9CtN7WKeWtQE/hff8AZlpb83LCSnYOknRi+31YjE1mqko+9xoftvX4pvB4wBt+fNUmdEHpvV1axXrWty9qYxucHpGqFfGMg2uqM1EO1R1daE9a2l1TxzYFgksxrQ4mAqVtYhH25Q8OietIvv5RZyCCo/tJQVOrLn4lusriT3IIILYc4DklBBAAckoIIA0/sy/7zw/jV/wKi6Pvp/SDxHyKNBRW/wBeRqwf1Su2dofD+Kp95NKf9vT+TkaC8zR/2F2/Znbq/RZXD3nJnE8PriggulHd73GWW/t+4zuz/WKf9o35rYbwe55u+ZQQWfG/7UOz7snB/SfvgZvZf9Ypfvt+a0G1ve/v/wDWggpxH1I9n3LU/lZe1Pcd5fJc03+/rA/cZ/zIIKv6d9bu/ArG/S70V+A9365rRbo/0vp+qCC14v6cymH+aJC9rH9Nh/7I/wCK5YRyCC14P6EOwwYn60u0HBJ4IILSIAklGgggJAoIKCRKCCCAP//Z"
                  alt="image-artist"
                />
              </span>

              <span class="like-artist__name">Hoàng Dũng</span>
            </a>

            <a href="#" class="like-artist">
              <span class="like-artist__img">
                <img
                  src="https://is1-ssl.mzstatic.com/image/thumb/Features116/v4/73/fa/67/73fa6781-9cff-8b68-015e-4b380a17f1c2/mzl.pthgqmln.jpg/375x375bb.jpg"
                  alt="image-artist"
                />
              </span>

              <span class="like-artist__name">JustaTee</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarAfterLogin;
