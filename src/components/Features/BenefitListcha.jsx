import { CheckCircle } from "lucide-react";

const BenefitsListcha = () => {
   const benefits = [
      "Tabiiy va halol mahsulot. Tarkibida sun’iy bo‘yoqlar va kimyoviy moddalar yo‘q",
      "Iste’mol qilishni boshlaganingizdan keyin, 3-7 kun ichida ta’siri seziladi",
      "Mahsulotni 7 yoshdan boshlab bolalar ham, ota-onalar nazorati ostida iste’mol qilishi mumkin",
   ];
   const ben = [
      "Tarkibida 50ga yaqin foydali elementlar mavjud",
      "TIBOMED tarkibidagi timoxinon kuchli antioksidant xususiyatga ega",
      "Hech qanday nojo‘ya ta’sirlari yo‘q, allergik belgilarni keltirib chiqarmaydi",
   ];

   return (
      <div className="max-w-4xl mx-auto py-10 px-4 text-center">
         <div className="mt-5 fs-4">
            <h2 className="text-2xl font-bold mb-6">
               Tibbio Tibomed organizmingizdagi qanday muammolarni
               <span className="text-green-600"></span> bartaraf qiladi
            </h2>
         </div>

         <div className=" d-flex justify-content-between">
            <div>
               {benefits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                     <div className="d-flex my-5 mx-4">
                        <CheckCircle className="bg-success rounded text-white mt-1" />
                        <p className="font-bold mx-2">{item}</p>
                     </div>
                  </div>
               ))}
            </div>
            <div>
               {ben.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                     <div className="d-flex my-5 mx-4">
                        <CheckCircle className="bg-success rounded text-white mt-1" />
                        <p className="font-bold mx-2">{item}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default BenefitsListcha;
