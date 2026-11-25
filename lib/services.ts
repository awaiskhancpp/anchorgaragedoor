export type Service = {
  slug: string;
  title: string;
  category: "garage" | "gate";
  heroIcon: string;
  heroImage: string;
  bodyImage: string;
  shortDescription: string;
  bodyParagraph: string;
  bodyParagraph2?: string;
};

const heroImages: Record<string, string> = {
  "broken-spring-repair": "/images/hero-broken-spring-repair-original.png",
  "garage-door-off-track-repair": "/images/hero-garage-door-off-track-repair.png",
  "broken-cable-repair": "/images/hero-broken-cable-repair.jpeg",
  "new-garage-door-installation": "/images/hero-new-garage-door-installation.png",
  "garage-door-opener": "/images/hero-garage-opener-opnener.webp",
  "garage-door-maintenance": "/images/hero-garage-door-maintenance.png",
  "new-gate-installation": "/images/hero-gate-new-gate-installation-1.webp",
  "electric-gate-repair": "/images/hero-electric-gate-repair.webp",
  "gate-opener-installation": "/images/hero-gate-opener-installation.png",
  "access-control-installation": "/images/hero-access-control-installation.webp",
};

// The photo used in each service page's "about this service" section
// (a different shot from the hero background), pulled from the live site's
// CSS background-image on that section — it isn't a plain <img> tag there.
const bodyImages: Record<string, string> = {
  "broken-spring-repair": "/images/body-broken-spring-repair.webp",
  "garage-door-off-track-repair": "/images/body-garage-door-off-track-repair.png",
  "broken-cable-repair": "/images/body-broken-cable-repair.webp",
  "new-garage-door-installation": "/images/body-new-garage-door-installation.png",
  "garage-door-opener": "/images/body-garage-door-opener.webp",
  "garage-door-maintenance": "/images/body-garage-door-maintenance.webp",
  "new-gate-installation": "/images/body-new-gate-installation.png",
  "electric-gate-repair": "/images/body-electric-gate-repair.webp",
  "gate-opener-installation": "/images/body-gate-opener-installation.png",
  "access-control-installation": "/images/body-access-control-installation.webp",
};

type ServiceInput = Omit<Service, "heroImage" | "bodyImage">;

const rawServices: ServiceInput[] = [
  {
    slug: "broken-spring-repair",
    title: "Broken Spring Repair",
    category: "garage",
    heroIcon: "/images/spring.svg",
    shortDescription:
      "Springs can snap due to time and overuse, a new spring can give your door a new life.",
    bodyParagraph:
      "A broken spring on a garage door is vital to your door’s overall function and smoothness. If your door is malfunctioning and you suspect it is due to the spring, it’s in your best interest to get it assessed as soon as possible, as using a door with a broken spring can cause further issues, which you don’t want.",
    bodyParagraph2:
      "A broken spring can be caused by old age (so if your springs are old, this is most likely the cause), overuse, and simply random malfunction, sometimes caused by lower-grade materials.",
  },
  {
    slug: "garage-door-off-track-repair",
    title: "Garage Door Off Track Repair",
    category: "garage",
    heroIcon: "/images/Garage-Door-Off-Track-_Repair.svg",
    shortDescription:
      "Going off track increases the likelihood of further damage to your garage door or gate – nip this in the bud as soon as you notice this.",
    bodyParagraph:
      "If you suspect that your garage door has gone off its tracks, it is best to stop using it immediately and call licensed professionals to inspect and repair your garage door. Attempting to use a garage door that has come off its tracks can be extremely dangerous as it can be at risk of dis-lodging entirely and put you and your property in harm’s way. Our priority is always to repair your existing door unless you’re looking for an excuse to buy a new one – we’re happy to be your excuse.",
  },
  {
    slug: "broken-cable-repair",
    title: "Broken Cable Repair",
    category: "garage",
    heroIcon: "/images/Broken-Cable-Repair.svg",
    shortDescription:
      "The cable came off the drum, do not attempt to open or close the door, it will cause the door to go off track, just call us and we’ll take care of that",
    bodyParagraph:
      "When the cable on your garage door breaks, it’s a hassle for you as the owner because you have to stop using it immediately. Your best course of action is to park on the street or in your driveway and call a professional garage door repair and installation company to repair the broken cable, ideally that same day. In most cases, there’s no need to throw the baby out with the bathwater unless there are further complications – the cable should be able to be repaired on the existing door and get your garage door back in action in no time.",
  },
  {
    slug: "new-garage-door-installation",
    title: "New Garage Door Installation",
    category: "garage",
    heroIcon: "/images/new-Garage-Door-_Installation.svg",
    shortDescription:
      "Want something reliable and secure that brings your home exterior together? A new garage door is just the thing!",
    bodyParagraph:
      "Are you looking to bring new life to your home’s exterior look? Or maybe you’re on the hunt for something that will increase the safety and security of your home while providing a stylish and modern look. Either way, it sounds like a new garage door installation is on your horizon. We offer our clients top-notch quality products to suit every budget, the kind with longevity, looks, and luxe quality. Scheduling your new garage door installation is easy – our team can work around your schedule. Reach out if you’re ready to get your new garage door in action.",
  },
  {
    slug: "garage-door-opener",
    title: "Garage Door Opener",
    category: "garage",
    heroIcon: "/images/Garage-Door-Opener.svg",
    shortDescription:
      "Even the best of garage door opener has a shelf life. We can get you sorted with a new dependable garage door opener.",
    bodyParagraph:
      "Gone are the days of the garage door opener being you. If your current method of getting in and out of your garage involves you getting out of your car and walking over to your garage door to open and close it – it’s definitely time for an upgrade! A motorized garage door opener brings so much ease to your daily life. You can get in and out of your garage with just the flick of a switch or the tap of a remote. Reach out today to discuss garage door opener installations and repairs.",
  },
  {
    slug: "garage-door-maintenance",
    title: "Garage Door Maintenance",
    category: "garage",
    heroIcon: "/images/Garage-Door-Maintenance.svg",
    shortDescription:
      "Maintenance helps to increase the longevity of your garage door. Contact us to set up your maintenance today.",
    bodyParagraph:
      "The key to having an effective garage door goes beyond simply selecting the best product to be installed. Even the best of products require regular maintenance, and ensuring that your garage door receives skilled maintenance attention can help increase the longevity of your garage door, saving you time, money, and future hassle. You’ll want to have your garage door reviewed and maintained at least once a year to ensure the consistent quality and effectiveness of your garage door. In some cases, a professional may suggest you have your garage door maintained twice a year – this is usually due to the door’s materials and the temperature’s impact.",
  },
  {
    slug: "new-gate-installation",
    title: "New Gate Installation",
    category: "gate",
    heroIcon: "/images/spring.svg",
    shortDescription:
      "Looking to get a new gate for your driveway or for you business? We got you covered, we offer a wide variety of custom made gates.",
    bodyParagraph:
      "Having an attractive gate at the entrance of your property is one of the most underrated ways to upscale your home. It sets the tone for the atmosphere of your house. Even before people step foot in your home, they get a sense of your taste by simply driving by your gate. Nobody wants to walk through a rickety old thing to make their way home every day. Treat yourself to a new gate, and have the kind of property that has cars slowing down as they pass!",
  },
  {
    slug: "electric-gate-repair",
    title: "Electric Gate Repair",
    category: "gate",
    heroIcon: "/images/Garage-Door-Off-Track-_Repair.svg",
    shortDescription:
      "If you’re having issues with your electric gate, we offer same day free diagnostics by one of our certified technicians, and repair it if needed.",
    bodyParagraph:
      "Electric gates offer next-level convenience and security to your home and everyday life. And suppose you’ve been living with an electric gate for a while, and it’s just started malfunctioning (or simply stopped working altogether). In that case, we bet you’re feeling super appreciative of your working electric gate right now. Luckily, you can get that feeling back with some swift repairs from a team of licensed professionals – that’s us. Call us today to arrange a time for a member of our team to come in and get your electric gate in working order.",
  },
  {
    slug: "gate-opener-installation",
    title: "Gate Opener Installation",
    category: "gate",
    heroIcon: "/images/Broken-Cable-Repair.svg",
    shortDescription:
      "Tired of opening your gate manually, or your old operator retired, we can install a new one for you, from a variety of the most trusted brands.",
    bodyParagraph:
      "Electric gates offer an unmatched level of daily convenience and security in your home. And electric gates would be nothing without a fully-functioning electric gate opener, which is essentially the mechanism that does the “opening” and “closing” for you. If your gate opener is malfunctioning, try not to stress too much, and reach out to a team of professionals to get someone onsite as soon as possible. In some instances, homeowners find their vehicles locked within the confines of their property when their gate opener malfunctions, this is just one of the reasons why we operate 24/7 for any urgent gate repairs.",
  },
  {
    slug: "access-control-installation",
    title: "Access Control Installation",
    category: "gate",
    heroIcon: "/images/new-Garage-Door-_Installation.svg",
    shortDescription:
      "Want to add accessories to your electric gate or entry gate? We offer telephone entry systems, keypads, safety devices, strikes and more.",
    bodyParagraph:
      "One of the most comprehensive ways to protect your family and your home is by installing and operating electronic access controls at your property’s entrance(s). Electronic gates offer the operator daily convenience, but the addition of an electronic access control provides even more comfort and a higher level of security. Electronic access controls allow homeowners to review who is requesting access to their property from the comfort and safety of their own home. From there, they can grant or deny access, only allowing known and authorized individuals onto their property. There is a wide range of options available, so make sure you talk to a skilled professional about which product is right for you.",
  },
];

export const services: Service[] = rawServices.map((s) => ({
  ...s,
  heroImage: heroImages[s.slug],
  bodyImage: bodyImages[s.slug],
}));

export const garageServices = services.filter((s) => s.category === "garage");
export const gateServices = services.filter((s) => s.category === "gate");

export const garageBrandLogos = [
  "craftsman.png",
  "clopay-768x384-1.png",
  "chi.png",
  "chamberlain-768x432-1.png",
  "amarr-768x384-1.png",
  "wayne.png",
  "stanley-768x238-1.png",
  "sommer.png",
  "sears-768x318-1.png",
  "overhead.png",
  "martin-768x597-1.png",
  "marantec.png",
  "linear.png",
  "liftmaster-768x241-1.png",
  "genie-768x346-1.png",
];

export const gateBrandLogos = [
  "dks.png",
  "certifite-welder.png",
  "door-bell.png",
  "eagle.png",
  "elite.png",
  "faac.png",
  "hnice.png",
  "liftmaster.png",
  "linear-1.png",
  "maximum.png",
  "nice-appolo.png",
  "ramset.png",
  "usautomatic.png",
  "viking.png",
  "all-o-matic.png",
  "bft.png",
  "cellgate.png",
];
