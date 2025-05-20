export default function Head() {
  return (
    <>
      <title>Sreekuttan PS | Frontend Developer</title>
      <meta name="description" content="Frontend dev building sleek modern apps." />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Sreekuttan PS",
            "alternateName": ["Sreekuttan P S", "Sree Kuttan", "Sreekuttan", "Sree", "Sreeku", "Sreekuttan Developer"],
            "url": "https://sreekuttan-ps.netlify.app",
            "image": "https://sreekuttan-ps.netlify.app/preview.png",
            "jobTitle": "Frontend Developer",
            "worksFor": {
              "@type": "Organization",
              "name": "Quintet Solutions Pvt Ltd",
            },
            "sameAs": [
              "https://github.com/sreekuttanPS",
              "https://www.linkedin.com/in/sreekuttan-p-s",
              "https://www.instagram.com/zavian_._/"
            ],
            "description": "Frontend developer crafting sleek, high-performance web apps using modern technologies."
          }),
        }}
      />
    </>
  );
}