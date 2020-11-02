const urls = [{"name": "Linkedin Profile", "url": "https://www.linkedin.com/in/junxiong-lin/"},
              {"name": "Github Page", "url": "https://github.com/lnn823/"},
              {"name": "Emergency Social Network", "url": "https://f19-sb3-esn.herokuapp.com/"}]
const socialNetworks = [
  {"svg": "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>Facebook icon</title><path d=\"M23.9981 11.9991C23.9981 5.37216 18.626 0 11.9991 0C5.37216 0 0 5.37216 0 11.9991C0 17.9882 4.38789 22.9522 10.1242 23.8524V15.4676H7.07758V11.9991H10.1242V9.35553C10.1242 6.34826 11.9156 4.68714 14.6564 4.68714C15.9692 4.68714 17.3424 4.92149 17.3424 4.92149V7.87439H15.8294C14.3388 7.87439 13.8739 8.79933 13.8739 9.74824V11.9991H17.2018L16.6698 15.4676H13.8739V23.8524C19.6103 22.9522 23.9981 17.9882 23.9981 11.9991Z\" fill='#1877F2'/></svg>",
    "url": "https://www.facebook.com/linjunxiong1997"},
  {"svg": "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>GitHub icon</title><path d=\"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\" fill='#181717'/></svg>",
    "url": "https://github.com/lnn823"},
  {"svg": "<svg role=\"img\" viewBox=\"0 0 24 24\" xmlns=\"http://www.w3.org/2000/svg\"><title>LinkedIn icon</title><path d=\"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z\" fill='#0077B5'/></svg>",
    "url": "https://www.linkedin.com/in/junxiong-lin/"},
  {"svg": "<svg role=\"img\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><title>Zhihu icon</title><path d=\"M5.721 0C2.251 0 0 2.25 0 5.719V18.28C0 21.751 2.252 24 5.721 24h12.56C21.751 24 24 21.75 24 18.281V5.72C24 2.249 21.75 0 18.281 0zm1.964 4.078c-.271.73-.5 1.434-.68 2.11h4.587c.545-.006.445 1.168.445 1.171H9.384a58.104 58.104 0 01-.112 3.797h2.712c.388.023.393 1.251.393 1.266H9.183a9.223 9.223 0 01-.408 2.102l.757-.604c.452.456 1.512 1.712 1.906 2.177.473.681.063 2.081.063 2.081l-2.794-3.382c-.653 2.518-1.845 3.607-1.845 3.607-.523.468-1.58.82-2.64.516 2.218-1.73 3.44-3.917 3.667-6.497H4.491c0-.015.197-1.243.806-1.266h2.71c.024-.32.086-3.254.086-3.797H6.598c-.136.406-.158.447-.268.753-.594 1.095-1.603 1.122-1.907 1.155.906-1.821 1.416-3.6 1.591-4.064.425-1.124 1.671-1.125 1.671-1.125zM13.078 6h6.377v11.33h-2.573l-2.184 1.373-.401-1.373h-1.219zm1.313 1.219v8.86h.623l.263.937 1.455-.938h1.456v-8.86z\" fill='#0084FF'/></svg>",
    "url": "https://www.zhihu.com/people/lin-jun-xiong-72"}
]
let avatar = "https://avatars2.githubusercontent.com/u/20330955?s=460&u=a8efb1c4738bfd09a260142892658cca5132bf2a&v=4"
addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */
class LinksTransformer {
  constructor(links) {
    this.links = links
  }

  async element(element) {
    this.links.forEach((url) => {
      element.append(`<a href="${url.url}">${url.name}</a>`, {html: true})
    })
  }
}

class TitleTransformer {
  constructor(name) {
    this.name = name
  }

  async element(element) {
    element.setInnerContent(this.name)
  }
}

class ColorTransformer {
  constructor(color) {
    this.color = color
  }

  async element(element) {
    element.setAttribute("class", this.color)
  }
}

class ProfileTransformer {
  constructor() {
  }

  async element(element) {
    element.removeAttribute("style")

  }
}

class SocialTransformer {
  constructor(links) {
    this.links = links
  }

  async element(element) {
    element.removeAttribute("style")
    this.links.forEach((social) => {
      element.append(`<a href="${social.url}">${social.svg}</a>`, {html: true})
    })
  }
}

class AvatarAdder {
  constructor(avatar) {
    this.avatar = avatar
  }

  async element(element) {
    element.setAttribute("src", this.avatar)
  }
}

class H1Adder {
  constructor(name) {
    this.name = name
  }

  async element(element) {
    element.append(this.name)
  }
}

async function handleRequest(request) {
  if (request.url.endsWith("/links")) {
    return new Response(JSON.stringify(urls),{
      headers: {'content-type': 'application/json'},
  })}
  else {
    let response = await fetch("https://static-links-page.signalnerve.workers.dev", {
      headers: {'content-type': 'text/html'}
    })
    return new HTMLRewriter()
      .on("title", new TitleTransformer("Junxiong Lin"))
      .on("body", new ColorTransformer("bg-teal-300"))
      .on("div#profile", new ProfileTransformer())
      .on("div#profile > img#avatar", new AvatarAdder(avatar))
      .on("div#profile > h1#name", new H1Adder("linjunxiong1997"))
      .on("div#links", new LinksTransformer(urls))
      .on("div#social", new SocialTransformer(socialNetworks))
      .transform(response)
  }
}
