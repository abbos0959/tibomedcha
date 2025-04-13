import { CheckCircle } from "lucide-react";

const BenefitsList = () => {
   const benefits = [
      "Immunitetni mustahkamlaydi",
      "O‘pka - bronx kasalliklarini oldini oladi",
      "Asab va yurak tizimi faoliyatini tiklaydi",
   ];
   const ben = [
      "Ovqat hazm qilish tizimini va tana teri holatini yaxshilaydi",
      "Sochlarni o‘stiradi va mustahkamlaydi",
      "Qondagi xolesterin miqdorini kamaytiradi",
   ];

   return (
      <div className="max-w-4xl mx-auto py-10 px-4 text-center">
         <div className="mt-5 fs-4">
            <h2 className="text-2xl font-bold mb-6">
               Xoziroq qo'ng'iroq qiling va <span className="text-green-600">BEPUL</span>{" "}
               konsultatsiya oling!
            </h2>
         </div>

         <div className=" d-flex justify-content-between">
            <div>
               {benefits.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                     <div className="d-flex my-5 mx-4">
                        <CheckCircle className="text-black mt-1" />
                        <p className="font-bold mx-2">{item}</p>
                     </div>
                  </div>
               ))}
            </div>
            <div>
               {ben.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                     <div className="d-flex my-5 mx-4">
                        <CheckCircle className="text-black mt-1" />
                        <p className="font-bold mx-2">{item}</p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
};

export default BenefitsList;
