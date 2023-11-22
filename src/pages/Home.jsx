import { Helmet } from "react-helmet";
import "../scss/home.scss";

export default function Home() {
  return (
    <main>
      <Helmet>
        <meta name="description" content="description text" />
        <meta name="robots" content="index, follow" />
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <link rel="canonical" href="https://mywebsite.fr/accueil" />
        <meta property="og:url" content="https://mywebsite.fr/accueil" />
        <meta property="og:site_name" content="mywebsite" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="mywebsite | title" />
        <meta property="og:description" content="description text" />
        <meta
          property="og:image"
          content="https://mywebsite.fr/assets/webp/share-cover.webp"
        />
        <meta
          property="og:image:secure_url"
          content="https://mywebsite.fr/assets/webp/share-cover.webp"
        />
        <meta property="og:image:width" content="584" />
        <meta property="og:image:height" content="384" />
        <meta property="fb:pages" content="" />
        <meta property="fb:admins" content="" />
        <meta property="fb:app_id" content="" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="" />
        <meta name="twitter:creator" content="" />
        <meta name="twitter:title" content="mywebsite | title" />
        <meta name="twitter:description" content="mywebsite | title" />
        <meta
          name="twitter:image"
          content="https://mywebsite.fr/assets/webp/share-cover.webp"
        />

        <title>My Website</title>
      </Helmet>

      <div>
        <h1>Home</h1>
        
      </div>
    </main>
  );
}
