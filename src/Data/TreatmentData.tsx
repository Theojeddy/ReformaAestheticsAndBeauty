// Data/TreatmentData.ts
import AntiWrinkle1 from "../assets/Treatments/Aesthetics/AntiWrinkle1.svg";
import AntiWrinkle2 from "../assets/Treatments/Aesthetics/AntiWrinkle2.svg";
import AntiWrinkle3 from "../assets/Treatments/Aesthetics/AntiWrinkle3.svg";
import Toxin1 from "../assets/Treatments/Aesthetics/Toxin1.svg";
import Toxin2 from "../assets/Treatments/Aesthetics/Toxin2.svg";
import Toxin3 from "../assets/Treatments/Aesthetics/Toxin3.svg";
import Toxin4 from "../assets/Treatments/Aesthetics/Toxin4.svg";
import Contour1 from "../assets/Treatments/Aesthetics/Contour1.svg";
import Contour2 from "../assets/Treatments/Aesthetics/Contour2.svg";
import Contour3 from "../assets/Treatments/Aesthetics/Contour3.svg";
import Filler2 from "../assets/Treatments/Aesthetics/Filler2.svg";
import Filler1 from "../assets/Treatments/Aesthetics/Filler1.svg";
import Needeling1 from "../assets/Treatments/Aesthetics/Needeling1.svg";
import Needeling2 from "../assets/Treatments/Aesthetics/Needeling2.svg";
import Facial1 from "../assets/Treatments/Aesthetics/Facial1.svg";
import Eyelash1 from "../assets/Treatments/Beauty/Eyelash1.svg";
import Eyelash2 from "../assets/Treatments/Beauty/Eyelash2.svg";
import Eyelash3 from "../assets/Treatments/Beauty/Eyelash3.svg";
import Eyelash4 from "../assets/Treatments/Beauty/Eyelash4.svg";
import Eyebrows1 from "../assets/Treatments/Beauty/Eyebrows1.svg";
import Eyebrows2 from "../assets/Treatments/Beauty/Eyebrows2.svg";
import Eyebrows3 from "../assets/Treatments/Beauty/Eyebrows3.svg";
import Eyebrows4 from "../assets/Treatments/Beauty/Eyebrows4.svg";
import Waxing1 from "../assets/Treatments/Beauty/Waxing1.svg";
import Waxing2 from "../assets/Treatments/Beauty/Waxing2.svg";
import Waxing3 from "../assets/Treatments/Beauty/Waxing3.svg";
import Tan1 from "../assets/Treatments/Beauty/Tan1.svg";
import Tan2 from "../assets/Treatments/Beauty/Tan2.svg";

export const treatmentsData = {
  aesthetics: [
    {
      name: "Anti-Wrinkle Treatments",
      description: `
    <strong>Anti-Wrinkle Treatment</strong>
    <hr/>
    Botulinum toxin injections, commonly known as "Botox," relax the muscles in your face to smooth out lines and wrinkles, such as crow's feet and frown lines. This treatment is not permanent and typically lasts around 3 to 4 months. Inquire within for more information on the areas that can be treated.
    <br/><br/>
    <strong>Pricing:</strong>
    <br/><br/>
    <strong>Female</strong><br/>
    - One Area: £140<br/>
    - Two Areas: £175<br/>
    - Three Areas: £195<br/><br/>
    <strong>Male</strong><br/>
    - One Area: £160<br/>
    - Two Areas: £195<br/>
    - Three Areas: £215<br/>
  `,
      images: [AntiWrinkle1, AntiWrinkle2, AntiWrinkle3],
    },
    {
      name: "Toxin Other",
      description: `
    <strong>Hyperhidrosis</strong>
    <hr/>
    Hyperhidrosis (overactive sweat glands) is a common issue for men and women in everyday life and can cause unwanted anxiety. This can be rectified within 40 minutes during a pain-free treatment. This treatment helps to control the symptoms of severe underarm sweating and helps prevent smell. Botulinum toxin is injected into the skin and works by temporarily blocking the chemical signals from the nerves that stimulate the sweat glands.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - £290 | 40 mins<br/><br/>
    
    <strong>Eyebrow Lift</strong>
    <hr/>
    Strategically placed injections around the eyes will help lift the brows to achieve a more "snatched" look giving some youthful height around the brows.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - £80 | 40 minutes<br/><br/>
    
    <strong>Eye Jelly Rolls</strong>
    <hr/>
    Jelly roll tox, often referred to as under-eye tox, is a specialized procedure designed to target and smooth out those pesky wrinkles that tend to accumulate around the eyes. Unlike traditional tox treatments, under-eye tox requires a delicate touch lasting around 3 months.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - £80 | 40 minutes<br/><br/>
    
    <strong>Platysmal Bands/Neck</strong>
    <hr/>
    This treatment reduces the appearance of neck muscles that appear more predominantly as we age. It can also stop the downward pull and reduce jowls at the same time, creating a more youthful appearance lasting around 3 to 4 months.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - £265 | 40 minutes<br/>
  `,
      images: [Toxin1, Toxin2, Toxin3, Toxin4],
    },
    {
      name: "Toxin Nose",
      description: `
    <strong>Nose Slimming</strong>
    <hr/>
    Nose slimming can reduce nostril flaring and relax the muscles around your nose to give a less bulky look by strategically placing small injection points in the areas required.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - £80 | 40 minutes<br/><br/>
    
    <strong>Bunny Lines</strong>
    <hr/>
    When Botulinum toxin is injected into the muscles around your nose, they temporarily lose the ability to crunch up, meaning fewer wrinkles! It's a quick and easy way to make your skin look smoother and younger. This treatment usually lasts around 3 months.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - £80 | 40 minutes<br/><br/>
    
    <strong>Tinkerbell Nose Lift</strong>
    <hr/>
    A Tinkerbell nose lift relaxes the muscles that prominently pull the tip of your nose down creating a pixy tip lift. This also works well in conjunction with dermal filler.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - £80 | 40 minutes<br/>
  `,
      images: [Toxin1, Toxin2, Toxin3, Toxin4],
    },
    {
      name: "Toxin Chin/Jaw",
      description: `
    <strong>Chin Pebbling</strong>
    <hr/>
    This condition is easily treated with toxin. The muscle that causes the uneven appearance of a bumpy chin is relaxed to give a smoother appearance and a more defined shape.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - £100 | 40 minutes<br/><br/>
    
    <strong>Jaw Slimming/Masseter</strong>
    <hr/>
    The masseter muscle can be reduced using a non-surgical treatment such as botulinum toxin. The procedure is non-invasive, involving a series of injections placed directly into the masseter muscle. This reduces a bulky appearance, giving a slimmer, feminine look, and also relieves teeth grinding.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - £175 | 40 minutes<br/><br/>
    
    <strong>Jowl Lift</strong>
    <hr/>
    With gravity and aging, the skin can start to sag and droop around the jawline leading to jowls. The appearance of jowls can often be reduced by injecting several toxin units to relax the downward pull, giving you a "natural lifted" look.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - £80 | 40 minutes<br/>
  `,
      images: [Toxin1, Toxin2, Toxin3, Toxin4],
    },
    {
      name: "Toxin Mouth",
      description: `
    <strong>DAO Downward Smile/Sad Face</strong>
    <hr/>
    As we age, our muscles gradually pull our smile down, giving the impression of a resting sad face. This treatment will give the client a happier, natural resting face. It can also help with marionette lines.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - £80 | 40 minutes<br/><br/>
    
    <strong>Smokers Lines</strong>
    <hr/>
    Botulinum toxin can soften fine lines and wrinkles around the mouth by reducing the number of muscle contractions and movements that cause dynamic wrinkles. It takes just a matter of days for smokers' lines to reduce, with results lasting from 3 to 4 months.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - £80 | 40 minutes<br/><br/>
    
    <strong>Gummy Smile</strong>
    <hr/>
    A gummy smile is caused by hyperactive lip muscles, showing a large amount of gum while smiling. This can be reduced by injecting botulinum toxin into selected muscles, reducing upward movement of the lip and creating a more confident smile.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - £80 | 40 minutes<br/><br/>
    
    <strong>Lip Flip</strong>
    <hr/>
    During a lip flip procedure, your lip will be injected with toxin into parts of your lip. Between 3-14 days after your treatment, the injections will make your lip look fuller or “poutier” without adding any volume. Lip flips generally look more natural than lip fillers and can last around 3 months. This is a great alternative if you're not ready for lip filler.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - £65 | 40 minutes<br/>
  `,
      images: [Toxin1, Toxin2, Toxin3, Toxin4],
    },
    {
      name: "Skin Boosters",
      description: `
    <strong>Seventy Hyal</strong>
    <hr/>
    Seventy Hyal is an injectable hyaluronic acid skin booster treatment that aims to improve hydration levels within the skin for a rejuvenated and glowing appearance. 2-3 sessions are required to achieve the best results.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - Seventy Hyal 1 Session: £120<br/>
    - Seventy Hyal 2 Sessions: £200<br/><br/>
    
    <strong>Profhilo</strong>
    <hr/>
    Profhilo naturally stimulates the production of four different types of collagen and elastin to significantly improve skin quality, reduce lines and wrinkles, and contour the face. Profhilo is an injectable anti-aging treatment designed to address skin that is losing its elasticity and firmness with age. For best results, 2 sessions are required, with maintenance once yearly.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - Profhilo 1 Session: £210<br/>
    - Profhilo 2 Sessions: £400<br/><br/>
    
    <strong>Jalupro Eyes</strong>
    <hr/>
    Jalupro is composed of amino acids and hyaluronic acid. It's a skin booster used to target under the eyes to help stimulate your body to increase its collagen and elastin to improve overall skin quality, turning back the years and making your eyes look brighter and fresher.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - £80 | 40 minutes<br/><br/>
    
    <strong>Lumi Eyes</strong>
    <hr/>
    Lumi Eyes provide a visible change within the eye area. It can reduce dark circles, fine lines, and puffiness. It stimulates collagen and elastin synthesis and repairs the skin to give you a more youthful and fresh look. For the ideal effect, 3 treatments are recommended.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - £100 | 40 minutes<br/>
  `,
      images: [Toxin1, Toxin2, Toxin3, Toxin4], // Replace with actual images
    },

    {
      name: "Facial Contouring",
      description: `
    <strong>Facial Contouring</strong>
    <br/>
    As we age, we experience loss of volume, fat pads separate, and muscle and bone volume decrease. Filler can help recreate our younger facial features or chisel and enhance what we may feel we are lacking, helping boost confidence. We can create a package to suit your needs. The package can include cheeks, jaw, and chin. All areas can be discussed during consultation.
    <br/>

    <strong>Pricing:</strong>
    <ul>
      <li><strong>1ml Facial Contouring</strong> - 40 mins £180.00</li>
      <li><strong>2ml Facial Contouring</strong> - 40 mins £280.00</li>
      <li><strong>3ml Facial Contouring</strong> - 40 mins £380.00</li>
      <li><strong>4ml Facial Contouring</strong> - 40 mins £470.00</li>
      <li><strong>5ml Facial Contouring</strong> - 40 mins £550.00</li>
    </ul>
    <hr/>

    <strong>Non-Surgical Rhinoplasty</strong>  
    Non-surgical rhinoplasty uses dermal filler to straighten out the lumps and bumps on the bridge of our nose or gives that pixie lift at the tip, giving you confidence for the side profile photos we all dread.
    <br/>

    <strong>Pricing:</strong>
    <ul>
      <li><strong>Non-Surgical Rhinoplasty</strong> - 40 mins £180.00</li>
    </ul>
  `,
      images: [Contour1, Contour2, Contour3],
    },
    {
      name: "Dermal Filler",
      description: `
    <strong>Dermal Filler</strong>
    <br/>

    <strong>Nasolabial (Nose to mouth lines)</strong>  
    This treatment can dramatically reduce the signs of aging by placing filler in the creases without any signs of having a cosmetic treatment, giving a very natural look. Lasting between 12-18 months.
    <br/>
    <strong>Pricing:</strong>
    <ul>
      <li><strong>Nasolabial Filler</strong> - 40 mins £180.00</li>
    </ul>
    <hr/>

    <strong>Lip Filler</strong>  
    There are different types of lip augmentation to fit your needs and goals. From reshaping to give you the look you desire to rehydrating, giving you a more youthful natural appearance, lasting between 12 - 18 months.
    <br/>
    <strong>Pricing:</strong>
    <ul>
      <li><strong>0.5ml Lip Filler</strong> - 40 mins £140.00</li>
      <li><strong>0.8ml Lip Filler</strong> - 40 mins £180.00</li>
      <li><strong>1ml Lip Filler</strong> - 40 mins £200.00</li>
    </ul>
    <hr/>

    <strong>Dissolve and Refill</strong>  
    Hyaluronidase, an enzyme that breaks down hyaluronic acid, is used in dissolving filler safely. Dissolve would take place within your initial appointment, and then you will require a 2/3 week wait before refill of 0.5ml.
    <br/>
    <strong>Pricing:</strong>
    <ul>
      <li><strong>Dissolve and Refill</strong> - 40 mins £300.00</li>
    </ul>
  `,
      images: [Filler1, Filler2],
    },
    {
      name: "Fat Dissolving",
      description: `
    <strong>Fat Dissolving</strong>
    <br/>

    <strong>Aqualyx</strong>  
    Aqualyx is an injectable compound made from the deoxycholate family of acids. The acids present in Aqualyx cause fat distraction in the body. Ideal for stubborn pockets of fat. Several sessions may be required.
    <br/>
    <strong>Pricing:</strong>
    <ul>
      <li><strong>Aqualyx Small Area</strong> - 40 mins £90.00</li>
      <li><strong>Aqualyx Large Area</strong> - 40 mins £140.00</li>
      <li><strong>Aqualyx Five Sessions</strong> - 40 mins £350.00</li>
    </ul>
    <hr/>

    <strong>Lemon Bottle</strong>  
    Lemon bottle solution is injected directly into the fatty tissue, where it works to break down fat cells. These cells are then eliminated from the body via the lymphatic system. Most clients experience minimal pain during this process and it targets small to large stubborn fatty areas around the body.
    <br/>
    <strong>Pricing:</strong>
    <ul>
      <li><strong>Lemon Bottle Small Area</strong> - 40 mins £110.00</li>
      <li><strong>Lemon Bottle Large Area</strong> - 40 mins £180.00</li>
      <li><strong>Lemon Bottle Chin Area</strong> - 40 mins £70.00</li>
    </ul>
  `,
      images: [Filler1, Filler2], // Add actual images if available
    },
    {
      name: "Micro Needling",
      description: `
    <strong>Microneedling</strong>
    <br/>

    <strong>Mesotherapy</strong>  
    Mesotherapy is a minimally invasive procedure for your skin. We use a cartridge of tiny needles to make microscopic holes in the top layer of the skin. The microscopic punctures are painless and help stimulate your skin's healing process, so it produces more collagen and elastin. In this treatment, we add a cocktail of serums specifically designed for your skin type to dramatically hydrate and rejuvenate. Reduces fine lines, wrinkles, and sun damage and gives a healthy glow.
    <br/>
    Maximum benefit requires a course of sessions or treating yourself to a one-off session to create that glow for a special event.
    <br/>
    <strong>Pricing:</strong>
    <ul>
      <li><strong>Face</strong> - 40 mins £70.00</li>
      <li><strong>Décolleté</strong> - 40 mins £85.00</li>
      <li><strong>Stretch Marks</strong> - 40 mins £80.00</li>
    </ul>
    <hr/>

    <strong>Microneedling with Vitamins only</strong>  
    40 mins £50.00  
    Microneedling Vitamin Infusion activates collagen production and cellular renewal. Vitamin, nutrient, and antioxidant blend targets visible signs of aging.
  `,
      images: [Needeling1, Needeling2], // Add actual images if available
    },
    {
      name: "Facials",
      description: `
    <strong>Facials</strong>
    <br/>

    <strong>Dermaplaning Facial</strong>  
    40 mins  
    £30.00  
    The removal of dead skin and peach fuzz from the face creates the perfect base for full glam or a perfect glow for a natural look.
    <br/>
    <hr/>

    <strong>Dermaplaning Facial with Mesotherapy</strong>  
    40 mins  
    £85.00  
    The removal of dead skin and peach fuzz from the face and the addition of mesotherapy create the perfect base for full glam or the perfect glow for a natural look.
    <br/>
    <hr/>

    <strong>Chemical Peel</strong>  
    The benefits of a chemical peel can improve the appearance of dull lifeless skin, improve skin tone and texture, treat acne, lessen fine lines and wrinkles, lower pores, and give a radiant glow. These peels are superficial and will not shed your skin, just slight peeling as if having dry skin. All peels are specific to your skin type.
    <br/>
    <strong>Pricing:</strong>
    <ul>
      <li>Chemical Peel - 40 mins £50.00</li>
      <li>Three Chemical Peel Sessions - 40 mins £125.00</li>
    </ul>
  `,
      images: [Facial1], // Add actual images if available
    },
    {
      name: "Vitamin Intramuscular Injections",
      description: `
    <strong>Vitamin Intramuscular Injections</strong>
    <br/>

    <strong>Vitamin B12</strong>
    <br/>
    Vitamin B12 is needed to form red blood cells and DNA. If deficient, intramuscular injection is the fastest way into your system. It helps with mood and brain function, muscle repair and growth, boosts your immune system, helps with fatigue and energy levels, boosts your metabolism, and aids with weight loss.
    <br/>
    You can feel the effects within 24 hours. Recommended once per week for four weeks and then once per month for maintenance.
    <br/>
    <strong>Pricing:</strong>
    <ul>
      <li>Single B12 - 20 mins £25.00</li>
      <li>Course of Five B12 - 20 mins £100.00</li>
    </ul>
    <br/>
    <hr/>

    <strong>Vitamin C</strong>
    <br/>
    Vitamin C helps boost the immune system, prevents cell damage, contributes to collagen production, and improves skin texture and look. To be maintained once every six weeks, this is injected in the top of the gluteus.
    <br/>
    <strong>Pricing:</strong>
    <ul>
      <li>20 mins £30.00</li>
    </ul>
    <br/>
    <hr/>

    <strong>Vitamin D</strong>
    <br/>
    Vitamin D is a common deficiency in Britain due to the weather and lack of sunshine. It can cause something commonly known as S.A.D., a form of depression. Vitamin D boosts your mood, supports bone health, and maintains a healthy immune system. Only one injection is required every three months.
    <br/>
    <strong>Pricing:</strong>
    <ul>
      <li>20 mins £55.00</li>
    </ul>
  `,
      images: [Facial1], // Add actual images if available
    },
  ],
  beauty: [
    {
      name: "Classic Lashes",
      description: `
    <strong>Classic Lashes</strong>
    <hr/>
    Classic lash extensions are a popular type of eyelash extension treatment that provides a natural and subtle enhancement to the eyes. During a classic lash extension application, a single extension is carefully applied to each natural lash using a special adhesive. These extensions are designed to add length and slight thickness to the natural lashes that are customizable in terms of length, curl, and thickness, allowing clients to achieve their desired look. 
    <br/><br/>
    With proper care and maintenance, classic lash extensions can last several weeks before needing a touch-up or fill. They eliminate the need for mascara and can help save time in your daily makeup routine. Overall, classic lash extensions are a popular choice for those looking to enhance their natural lashes with a timeless and sophisticated look.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - Classic Full Set: £40 | 2 hours<br/>
    - Classic Infill: £30 | 1 hour<br/>
  `,
      images: [Eyelash1, Eyelash2, Eyelash3, Eyelash4],
    },
    {
      name: "Hybrid Lashes",
      description: `
    <strong>Hybrid Lash Extensions</strong>
    <hr/>
    Hybrid lash extensions are a versatile and popular choice for those looking for a combination of both classic and volume lash extension techniques. During a hybrid lash extension application, a mix of classic and volume (multiple lightweight lash extensions fanned out and applied to each natural lash) techniques are used to achieve a textured and multidimensional look. 
    <br/><br/>
    With hybrid lash extensions, clients can enjoy the best of both worlds: the natural and subtle look of classic lashes combined with the added fullness and dimension of volume lashes. This results in a more dramatic and glamorous effect compared to classic lash extensions while still maintaining a balance between length, thickness, and texture. 
    <br/><br/>
    Overall, hybrid lash extensions offer a beautiful and versatile option for those seeking a more dynamic and textured lash look that strikes the perfect balance between classic elegance and volume glamour.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - Hybrid Full Set: £45 | 2 hours<br/>
    - Hybrid Infill: £35 | 1 hour<br/>
  `,
      images: [Eyelash1, Eyelash2, Eyelash3, Eyelash4],
    },
    {
      name: "Russian Lashes",
      description: `
    <strong>Russian Lashes</strong>
    <hr/>
    Russian lash extensions, also known as volume lash extensions, is a technique that involves applying multiple lightweight lash extensions to each natural lash. During a Russian lash extension application, the lash technician carefully creates handmade lash fans using ultra-fine extensions and attaches them to the natural lashes. 
    <br/><br/>
    Russian lash extensions are ideal for those looking for a dramatic and glamorous lash look with maximum volume and fullness. With Russian lash extensions, clients can achieve a bold and striking appearance that enhances the eyes and adds a touch of luxury to their overall look. Proper aftercare and maintenance can help prolong the lifespan of Russian lash extensions, allowing clients to enjoy their voluminous lashes for several weeks before needing a touch-up or fill.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - Russian Full Set: £50 | 2 hours<br/>
    - Russian Infill: £40 | 1 hour<br/>
  `,
      images: [Eyelash1, Eyelash2, Eyelash3, Eyelash4],
    },
    {
      name: "Lash Lift & Tint",
      description: `
    <strong>Lash Lift & Tint</strong>
    <hr/>
    A lash lift and tint are treatments designed to enhance the appearance of your natural lashes. A lash lift is a semi-permanent treatment that lifts and curls your natural lashes from the root, creating the appearance of longer, fuller lashes. A lash tint involves applying a semi-permanent dye to your natural lashes to enhance their color and give them a darker, more defined look. 
    <br/><br/>
    The tint helps to make your lashes appear more voluminous and eliminates the need for mascara, as it provides a darker hue to your lashes. When combined, a lash lift and tint treatment can give your lashes a natural-looking lift, curl, and color, enhancing your overall eye appearance and making your lashes appear longer, fuller, and more defined.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - Lash Lift & Tint: £25 | 30 minutes<br/>
    - Lash Lift: £20 | 25 minutes<br/>
    - Lash Tint: £8 | 15 minutes<br/>
  `,
      images: [Eyelash1, Eyelash2, Eyelash3, Eyelash4],
    },
    {
      name: "Infills",
      description: `
    <strong>Infills</strong>
    <hr/>
    A lash infill is a maintenance appointment for eyelash extensions. The lash technician will assess the current condition of your extensions and fill in any gaps or areas where extensions have shed since your last appointment. The technician will carefully remove any outgrown or loose lashes and apply new extensions to achieve a full and voluminous look. 
    <br/><br/>
    Typically, lash infills are done every 2-3 weeks to maintain the fullness and length of your lash extensions.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - Classic Infill: £30 | 1 hour<br/>
    - Hybrid Infill: £35 | 1 hour<br/>
    - Russian Infill: £40 | 1 hour<br/>
  `,
      images: [Eyelash1, Eyelash2, Eyelash3, Eyelash4],
    },
    {
      name: "Lash Removal",
      description: `
    <strong>Lash Removal</strong>
    <hr/>
    Lash extension removal is a process to remove eyelash extensions safely and gently without causing damage to your natural lashes.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - Extension Removal: £10 | 30 minutes<br/>
  `,
      images: [Eyelash1, Eyelash2, Eyelash3, Eyelash4],
    },
    {
      name: "Eyebrows",
      description: `
    <strong>Eyebrow Treatments</strong>
    <hr/>
    Our eyebrow treatments are designed to enhance your natural beauty and give you perfectly groomed and defined brows. We offer a variety of services, including:

    <strong>Eyebrow Wax:</strong> Our eyebrow wax and shape service removes unwanted hair and shapes your brows to suit your facial features, providing a polished look tailored to your preferences.
    <br/><br/>
    <strong>Eyebrow Wax and Tint:</strong> This service combines waxing and tinting using high-quality Sienna X products to enhance your brows with your desired shade.
    <br/><br/>
    <strong>Eyebrow Lamination:</strong> A semi-permanent treatment that straightens and sets brow hairs in place for a sleek and uniform look that lasts for weeks.
    <br/><br/>
    <strong>Eyebrow Lamination and Tint:</strong> Enjoy all the benefits of eyebrow lamination, with the added enhancement of tinting for a defined color.
    <br/><br/>
    <strong>Henna Brows:</strong> Using natural henna dye, this semi-permanent treatment tints hair and stains the skin for a fuller, more defined look that lasts up to six weeks on the hair and two weeks on the skin.
    <br/><br/>
    <strong>Pricing:</strong><br/>
    - Eyebrow Wax: £7 | 20 minutes<br/>
    - Eyebrow Wax and Tint: £10 | 20 minutes<br/>
    - Eyebrow Lamination: £20 | 40 minutes<br/>
    - Eyebrow Lamination and Tint: £20 | 40 minutes<br/>
    - Henna Brows: £25 | 60 minutes<br/>
  `,
      images: [Eyebrows1, Eyebrows2, Eyebrows3, Eyebrows4],
    },
    {
      name: "Waxing",
      description: `
    <strong>Waxing</strong>
    <hr/>
    Say goodbye to the inconvenience of shaving and hello to long-lasting results! Our skilled practitioners employ high-quality products and techniques to provide a comfortable and successful waxing experience. Feel empowered and ready to wear your favorite swimsuit or lingerie with the confidence that comes from being well-groomed. No need to worry about stubble or razor burn; our waxing service will leave your skin smooth and radiant. Enjoy the confidence of silky, beautiful skin!
    <br/><br/>
    Choose from a variety of areas to gain confidence in:
    <br/><br/>
    <strong>Leg:</strong><br/>
    - Full Leg: £20 | 40 minutes<br/>
    - Half Leg: £15 | 20 minutes<br/><br/>
    
    <strong>Intimate Area:</strong><br/>
    - Bikini Line: £15 | 20 minutes<br/>
    - Hollywood: £45 | 35 minutes<br/>
    - Brazilian: £45 | 35 minutes<br/><br/>
    
    <strong>Arms:</strong><br/>
    - Full Arm: £15 | 20 minutes<br/>
    - Forearm: £12 | 20 minutes<br/>
    - Under Arm: £10 | 20 minutes<br/><br/>
    
    <strong>Torso:</strong><br/>
    - Chest & Back Wax: £35 | 1 hour<br/>
    - Chest Wax: £20 | 30 minutes<br/>
    - Back Wax: £20 | 30 minutes<br/><br/>
    
    <strong>Other Wax Treatments:</strong><br/>
    - Lip Wax: £5 | 15 minutes<br/>
    - Chin Wax: £6 | 15 minutes<br/>
  `,
      images: [Waxing1, Waxing2, Waxing3],
    },

    {
      name: "Mobile Spray Tans",
      description: `
    <strong>Sienna X Spray Tan</strong>
    <br/>
    With four natural-looking, streak-free strengths, our solutions provide gorgeous, sun-kissed skin that lasts for days. Plus, with nourishing ingredients like moisturizing Q10, Aloe, and Vitamin E, the Sienna X solutions are as luxurious as they are effective.
    <br/><br/>
    The Sienna X spray tan takes no longer than 10 minutes to complete in the comfort of your own home. Please add your address to the booking notes or message @reformabeauty on Instagram.
    <br/><br/>
    Groups of 2 or more will receive a bespoke package deal, please message to find out more. <strong>30 mins £25.00</strong>
    <br/><br/>
    <strong>Available Strengths:</strong>
    <ul>
      <li>Sienna X 6%</li>
      <li>Sienna X 8%</li>
      <li>Sienna X 10%</li>
      <li>Sienna X 12%</li>
    </ul>
    <br/><hr/>

    <strong>Sienna X 1 Hour Express</strong>
    <br/>
    <strong>30 mins £30.00</strong>
    <br/>
    The Sienna X 1HR Express Vegan spray tan solution is ideal for nearly all skin tones, and for those who do not want to sit for long waiting for the tan to develop.
    <br/><br/>
    The Sienna X spray tan takes no longer than 10 minutes to complete in the comfort of your own home. Please add your address to the booking notes or message @reformabeauty on Instagram.
    <br/><br/>
    Groups of 2 or more will receive a bespoke package deal, please message to find out more.
    <br/><br/>
    This tan can be left on to develop for 1-4 hours depending on your skin tone and the final result you would like to achieve. It is a versatile solution that enables you to achieve anything from light to dark tans, giving you a natural, confidence-boosting holiday glow.
  `,
      images: [Tan1, Tan2], // Add actual images if available
    },
    {
      name: "Packages And Deals",
      description:
        "Packages and deals are a type of cosmetic procedure that can help you save money on multiple treatments.",
      images: [Waxing1, Waxing2, Waxing2], // Add actual images if available
    },
  ],
};
