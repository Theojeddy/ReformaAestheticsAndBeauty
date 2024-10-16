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
      name: "Toxin Treatments",
      description: `
    <strong>Injectable Treatments</strong>
    <hr/>
    <strong>Hyperhidrosis</strong>  
    <em>1 hour - £290</em>  
    Hyperhidrosis (overactive sweat glands) is a common issue for men and women in everyday life and can cause unwanted anxiety. This treatment helps control the symptoms of severe underarm sweating and prevents odor. Botulinum toxin is injected into the skin to temporarily block the chemical signals from the nerves that stimulate the sweat glands. The treatment takes around 40 minutes and is pain-free.
    <hr/>

    <strong>Nose Slimming</strong>  
    <em>50 mins - £80</em>  
    Nose slimming can reduce nostril flaring and relax the muscles around your nose to give a less bulky look by strategically placing small injection points in the areas required.
    <hr/>

    <strong>DAO Downward Smile/Sad Face</strong>  
    <em>50 mins - £80</em>  
    As we age, our muscles gradually pull our smile down, giving the impression of a resting sad face. This treatment will help create a happier, natural resting face and can also assist with marionette lines.
    <hr/>

    <strong>Chin Pebbling</strong>  
    <em>50 mins - £100</em>  
    This condition is easily treated with toxin. The muscle causing the uneven appearance of a bumpy chin is relaxed to give a smoother appearance and a more defined shape.
    <hr/>

    <strong>Jaw Slimming/Masseter</strong>  
    <em>40 mins - £175</em>  
    The masseter muscle can be reduced using a non-surgical treatment such as botulinum toxin. This non-invasive procedure involves a series of injections placed directly into the masseter muscle, reducing a bulky appearance and relieving teeth grinding.
    <hr/>

    <strong>Eyebrow Lift</strong>  
    <em>40 mins - £80</em>  
    Strategically placed injections around the eyes will help lift the brows, achieving a more "snatched" look and giving a youthful height around the brows.
    <hr/>

    <strong>Jowl Lift</strong>  
    <em>40 mins - £80</em>  
    With aging, skin can sag and droop around the jawline, leading to jowls. This appearance can be reduced by injecting several toxin units to relax the downward pull, providing a "natural lifted" look.
    <hr/>

    <strong>Smokers Lines</strong>  
    <em>40 mins - £80</em>  
    Botulinum toxin can soften fine lines and wrinkles around the mouth by reducing the number of muscle contractions and movements that cause dynamic wrinkles. Results appear within days and last from 3 to 4 months.
    <hr/>

    <strong>Bunny Lines</strong>  
    <em>40 mins - £80</em>  
    Botulinum toxin injected into the muscles around your nose temporarily inhibits their ability to crunch up, reducing wrinkles and smoothing the skin. This treatment usually lasts around 3 months.
    <hr/>

    <strong>Gummy Smile</strong>  
    <em>45 mins - £80</em>  
    A gummy smile is caused by hyperactive lip muscles, showing a large amount of gum while smiling. This can be reduced by injecting botulinum toxin into selected muscles, decreasing the upward movement of the lip and creating a more confident smile.
    <hr/>

    <strong>Tinkerbell Nose Lift</strong>  
    <em>40 mins - £80</em>  
    A Tinkerbell nose lift relaxes the muscles that pull the tip of your nose down, creating a pixie tip lift. This treatment works well in conjunction with dermal filler.
    <hr/>

    <strong>Platysmal Bands/Neck</strong>  
    <em>40 mins - £265</em>  
    This treatment reduces the appearance of neck muscles that become more prominent with age. It can also stop the downward pull and reduce jowls, creating a more youthful appearance lasting around 3 to 4 months.
    <hr/>

    <strong>Eye Jelly Rolls</strong>  
    <em>40 mins - £80</em>  
    Jelly roll tox, often referred to as under-eye tox, is a specialized procedure designed to target and smooth out wrinkles around the eyes. Unlike traditional tox treatments, under-eye tox requires a delicate touch and lasts around 3 months.
    <hr/>

    <strong>Lip Flip</strong>  
    <em>40 mins - £80</em>  
    During a lip flip, your lip will be injected with toxin in specific areas. Between 3-14 days after treatment, the injections will make your lip look fuller or "poutier" without adding volume. Lip flips generally appear more natural than lip fillers and can last around 3 months. This is a great alternative if you're not ready for lip filler.
  `,
      images: [Toxin1, Toxin2, Toxin3, Toxin4],
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
      name: "Eyelashes",
      description: `
    <strong>Classic Lash Extensions</strong>
    <br/>
    Classic lash extensions are a popular type of eyelash extension treatment that provides a natural and subtle enhancement to the eyes. During a classic lash extension application, a single extension fiber is carefully applied to each individual natural lash using a special adhesive.
    <br/>
    These extensions are designed to add length and slight thickness to the natural lashes, creating a look that is often described as soft, fluttery, and elegant. Classic lash extensions are customizable in terms of length, curl, and thickness, allowing clients to achieve their desired look, whether it be a subtle enhancement for everyday wear or a more dramatic effect for special occasions.
    <br/>
    With proper care and maintenance, classic lash extensions can last several weeks before needing a touch-up or fill. They eliminate the need for mascara and can help save time in your daily makeup routine. Overall, classic lash extensions are a popular choice for those looking to enhance their natural lashes with a timeless and sophisticated look.
    <br/>
    <strong>Pricing:</strong>
    <ul>
      <li>Classic Lash Extensions - 150 mins £40.00</li>
      <li>Classic Lash Infill - 90 mins £30.00</li>
    </ul>
    <br/>
    <hr/>

    <strong>Hybrid Lash Extensions</strong>
    <br/>
    Hybrid lash extensions are a versatile and popular choice for those looking for a combination of both classic and volume lash extension techniques. During a hybrid lash extension application, a mix of classic (individual lash extensions) and volume (multiple lightweight lash extensions fanned out and applied to each natural lash) techniques are used to achieve a textured and multidimensional look.
    <br/>
    With hybrid lash extensions, clients can enjoy the best of both worlds: the natural and subtle look of classic lashes combined with the added fullness and dimension of volume lashes. This results in a more dramatic and glamorous effect compared to classic lash extensions, while still maintaining a balance between length, thickness, and texture.
    <br/>
    Hybrid lash extensions can be customized to suit each individual's preferences, with options for different lengths, curls, and thicknesses. The end result is a lush and eye-catching look that enhances the natural beauty of the eyes. With proper care and maintenance, hybrid lash extensions can last several weeks before needing a touch-up or fill.
    <br/>
    Overall, hybrid lash extensions offer a beautiful and versatile option for those seeking a more dynamic and textured lash look that strikes the perfect balance between classic elegance and volume glamour.
    <br/>
    <strong>Pricing:</strong>
    <ul>
      <li>Hybrid Lash Extensions - 150 mins £45.00</li>
      <li>Hybrid Lash Infill - 90 mins £35.00</li>
    </ul>
    <br/>
    <hr/>

    <strong>Russian/Volume Lash Extensions</strong>
    <br/>
    Russian lash extensions, also known as volume lash extensions, are a type of eyelash extension technique that involves applying multiple lightweight lash extensions to each natural lash. This creates a fuller, more voluminous look compared to classic or hybrid lash extensions.
    <br/>
    During a Russian lash extension application, the lash technician carefully creates handmade lash fans using ultra-fine extensions and attaches them to the natural lashes. The fans can vary in size and shape, allowing for a customized look tailored to the client's preferences.
    <br/>
    Russian lash extensions are ideal for those looking for a dramatic and glamorous lash look with maximum volume and fullness. Despite the increased number of extensions applied, Russian lashes are lightweight and comfortable to wear. The technique is also designed to be gentle on the natural lashes, helping to maintain their health and integrity.
    <br/>
    With Russian lash extensions, clients can achieve a bold and striking appearance that enhances the eyes and adds a touch of luxury to their overall look. Proper aftercare and maintenance can help prolong the lifespan of Russian lash extensions, allowing clients to enjoy their voluminous lashes for several weeks before needing a touch-up or fill.
    <br/>
    Overall, Russian lash extensions offer a high-impact and statement-making option for those who desire fullness, volume, and intensity in their lash look.
    <br/>
    <strong>Pricing:</strong>
    <ul>
      <li>Russian/Volume Lash Extensions - 150 mins £50.00</li>
      <li>Russian/Volume Lash Infill - 90 mins £40.00</li>
    </ul>
    <br/>
    <hr/>

    <strong>Lash Lift and Tint</strong>
    <br/>
    A lash lift and tint are a beauty treatment designed to enhance the appearance of your natural lashes. Here's a brief description of each component:
    <ol>
      <li>
        <strong>Lash Lift</strong>: A lash lift is a semi-permanent treatment that lifts and curls your natural lashes from the root, creating the appearance of longer, fuller lashes. During the treatment, your lashes are carefully lifted onto a silicone rod and a lifting solution is applied to set the curl. This process helps to give your eyes a more open and lifted look without the need for eyelash extensions.
      </li>
      <li>
        <strong>Lash Tint</strong>: A lash tint involves applying a semi-permanent dye to your natural lashes to enhance their colour and give them a darker, more defined look. The tint helps to make your lashes appear more voluminous and eliminates the need for mascara, as it provides a darker hue to your lashes.
      </li>
    </ol>
    When combined, a lash lift and tint treatment can give your lashes a natural-looking lift, curl, and colour, enhancing your overall eye appearance and making your lashes appear longer, fuller, and more defined. The results typically last for several weeks, depending on your natural lash growth cycle.
    <br/>
    <strong>Pricing:</strong>
    <ul>
      <li>Lash Lift and Tint - 50 mins £25.00</li>
      <li>Lash Lift (No Tint) - 45 mins £20.00</li>
      <li>Lash Tint - 20 mins £8.00</li>
      <li>Eyelash Extension Removal - 20 mins £10.00</li>
    </ul>
    <br/>
    Lash extension removal is a process to remove eyelash extensions safely and gently without causing damage to your natural lashes.
  `,
      images: [Eyelash1, Eyelash2, Eyelash3, Eyelash4],
    },
    {
      name: "Eyebrows",
      description: `
    <strong>Eyebrow Wax</strong> - 20 mins £7.00
    <br/>
    Our eyebrow wax and shape service is designed to give you perfectly groomed and defined brows that enhance your natural beauty. Our experienced practitioner will carefully wax away any unwanted hair and shape your brows to suit your facial features, giving you a polished and sophisticated look.
    <br/>
    During the service, we will consult with you to understand your preferences and desired brow shape. We use high-quality Sienna X wax and professional techniques to ensure a precise and comfortable experience. Whether you prefer a natural, arched, or defined look, our experts will tailor the service to meet your needs.
    <br/>
    <hr/>

    <strong>Eyebrow Wax and Tint</strong> - 30 mins £10.00
    <br/>
    Our eyebrow wax and shape service is designed to give you perfectly groomed and defined brows that enhance your natural beauty. Our experienced practitioner will carefully wax away any unwanted hair and shape your brows to suit your facial features, giving you a polished and sophisticated look.
    <br/>
    During the service, we will consult with you to understand your preferences and desired brow shape. We use high-quality Sienna X wax and tint in an array of colors to suit your desired shade. Whether you prefer a natural, arched, or defined look, our experts will tailor the service to meet your needs.
    <br/>
    <hr/>

    <strong>Eyebrow Lamination</strong> - 50 mins £20.00
    <br/>
    Transform your brows with our eyebrow lamination service, the latest trend in achieving full, fluffy, and perfectly groomed eyebrows. Eyebrow lamination is a semi-permanent treatment that helps to straighten and set brow hairs in place, giving you a sleek and uniform look that lasts for weeks.
    <br/>
    During the eyebrow lamination service, our skilled technicians will apply a gentle solution to your brows to reshape and tame unruly hairs. The process helps to create the appearance of fuller brows and enhances your natural brow shape. Whether you have sparse brows that need a boost or want to achieve a more defined look, eyebrow lamination is the perfect solution.
    <br/>
    <hr/>

    <strong>Eyebrow Lamination and Tint</strong> - 55 mins £25.00
    <br/>
    Transform your brows with our eyebrow lamination service, the latest trend in achieving full, fluffy, and perfectly groomed eyebrows. Eyebrow lamination is a semi-permanent treatment that helps to straighten and set brow hairs in place, giving you a sleek and uniform look that lasts for weeks.
    <br/>
    During the eyebrow lamination service, our skilled technicians will apply a gentle solution to your brows to reshape and tame unruly hairs. They will apply a tint in the color best suited or mixed for the perfect shade for the client’s brow. The process helps to create the appearance of fuller brows and enhances your natural brow shape. Whether you have sparse brows that need a boost or want to achieve a more defined look, eyebrow lamination is the perfect solution.
    <br/>
    <hr/>

    <strong>Henna Brows</strong> - 60 mins £25.00
    <br/>
    Henna is a safe and natural alternative to tints and dyes. It is vegan-friendly and free from peroxide activators, making it a suitable option for anyone with sensitive skin. It also lasts longer than traditional tints, normally 2-4 weeks. Often henna brows are a good stepping stone to more permanent eyebrow procedures.
  `,
      images: [Eyebrows1, Eyebrows2, Eyebrows3, Eyebrows4],
    },
    {
      name: "Body Waxing",
      description: `
    <strong>Body Waxing</strong>
    <br/>
    Get ready to flaunt silky smooth legs with our professional leg waxing service! Say goodbye to the hassle of shaving and hello to long-lasting results. Our experienced practitioners use high-quality products and techniques to ensure a comfortable and effective waxing experience.
    <br/>
    Whether you're looking to rock a pair of shorts, a skirt, or simply want that clean and smooth feeling, our leg waxing service is the perfect solution. We cater to all skin types and hair textures, so you can trust us to deliver excellent results every time.

    <strong>Pricing:</strong>
    <ul>
      <li><strong>Full Leg Wax</strong> - 40 mins £20.00</li>
      <li><strong>1/2 Leg Wax</strong> - 20 mins £15.00</li>
      <li><strong>Bikini Line Wax</strong> - 20 mins £15.00</li>
    </ul>

    Prepare to experience the ultimate confidence boost with our professional bikini line waxing service! Our skilled practitioners provide a discreet and comfortable environment for you to achieve smooth and flawless results.
    <br/>
    With our high-quality waxing products and expert techniques, you can trust that you are in good hands. Feel empowered and ready to rock your favorite swimsuit or lingerie with the confidence that comes from a perfectly groomed bikini line.

    <strong>Full Arm Wax</strong>
    <br/>
    Get ready to unveil smooth and hair-free arms with our professional arm waxing service! Say goodbye to the endless cycle of shaving and hello to long-lasting results that leave your arms looking and feeling silky and soft.
    <br/>
    Our experienced practitioners use top-quality waxing products and techniques to ensure a comfortable and effective waxing experience. Whether you're looking to remove fine hair or coarse hair, we've got you covered with our customized arm waxing services.

    <strong>Pricing:</strong>
    <ul>
      <li><strong>Full Arm Wax</strong> - 25 mins £15.00</li>
      <li><strong>Fore Arm Wax</strong> - 20 mins £12.00</li>
      <li><strong>Underarm Wax</strong> - 20 mins £10.00</li>
    </ul>
    Experience smooth and hair-free underarms with our professional underarm waxing service. Our skilled practitioners will ensure a quick and effective treatment, leaving your skin feeling soft and silky.

    <strong>Additional Services:</strong>
    <ul>
      <li><strong>Back Wax</strong> - 40 mins £20.00</li>
      <li><strong>Chest Wax</strong> - 40 mins £20.00</li>
      <li><strong>Chest and Back Wax</strong> - 60 mins £35.00</li>
      <li><strong>Lip Wax</strong> - 15 mins £5.00</li>
      <li><strong>Chin Wax</strong> - 15 mins £6.00</li>
    </ul>

    <strong>Packages:</strong>
    <ul>
      <li><strong>The Full Works Wax</strong> - 120 mins £50.00 (Full leg, bikini line, underarm, full arm, lip, and chin)</li>
      <li><strong>Standard Trio Wax</strong> - 80 mins £40.00 (Full leg, bikini line, and underarm)</li>
      <li><strong>The Duo Wax</strong> - 60 mins £30.00 (Full leg and bikini line)</li>
    </ul>
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
