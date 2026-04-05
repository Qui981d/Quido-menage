"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import DatePicker from "@/components/DatePicker";

export default function ReservationFunnel() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    zipCode: "",
    city: "",
    date: "",
    serviceType: "Régulier",
    rooms: "3",
    areaSize: "60",
    bathrooms: "1",
    message: ""
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => setStep(step + 1);
  const handlePrev = () => setStep(step - 1);

  const handleNextStep2 = () => {
    if (!formData.areaSize || !formData.rooms || !formData.bathrooms || !formData.address || !formData.zipCode || !formData.city) {
      alert("Veuillez remplir toutes les informations concernant votre logement.");
      return;
    }
    if (!formData.date || !formData.date.includes(' ')) {
      alert("Veuillez sélectionner une date et un créneau horaire sur le calendrier.");
      return;
    }
    setStep(step + 1);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      alert("Erreur de connexion.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white rounded-3xl p-10 text-center shadow-sm border border-gray-100">
          <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={40} className="text-white" />
          </div>
          <h2 className="font-display text-3xl font-bold text-black mb-4">Demande envoyée</h2>
          <p className="text-gray-500 mb-8">
            Merci {formData.firstName} ! Nous avons bien reçu votre demande concernant votre logement de {formData.areaSize}m². Notre équipe va vous contacter rapidement.
          </p>
          <a href="/menage/" className="bg-black text-white px-6 py-4 rounded-xl font-bold inline-block w-full hover:bg-gray-800 transition-colors">
            Retour à l'accueil
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Mini Header */}
      <header className="border-b border-gray-100 py-6 px-8 flex justify-between items-center">
        <a href="/menage/" className="flex items-center">
          <Image src="/menage/images/logo/Votre texte de paragraphe.png" alt="Quido" width={180} height={58} className="h-12 lg:h-14 w-auto" />
        </a>
        <a href="/menage/" className="text-sm font-medium text-gray-400 hover:text-black transition-colors">
          Annuler
        </a>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12 lg:py-20">
        
        {/* Progress (Only Green Element) */}
        <div className="flex gap-2 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${step >= s ? "bg-quido" : "bg-gray-100"}`} />
          ))}
        </div>

        <form onSubmit={handleSubmit}>
          
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="font-display text-4xl font-bold text-black mb-3">Votre besoin</h1>
              <p className="text-gray-500 mb-10">Sélectionnez le type de ménage dont vous avez besoin.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {["Régulier", "Ponctuel", "Profond / Printemps", "Après travaux", "Après déménagement"].map((type) => (
                   <div 
                     key={type}
                     onClick={() => setFormData({...formData, serviceType: type})}
                     className={`border-2 rounded-2xl p-6 cursor-pointer transition-all ${formData.serviceType === type ? "border-black shadow-lg shadow-black/5" : "border-gray-100 hover:border-gray-300"}`}
                   >
                     <div className="flex items-center justify-between">
                       <span className={`font-display font-medium text-lg ${formData.serviceType === type ? "text-black font-bold" : "text-black/60"}`}>{type}</span>
                       <div className={`w-5 h-5 rounded-full border-2 transition-colors ${formData.serviceType === type ? "border-black bg-black" : "border-gray-300"}`} />
                     </div>
                   </div>
                ))}
              </div>
              
              <div className="flex justify-end border-t border-gray-100 pt-8">
                <button type="button" onClick={handleNext} className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center gap-3">
                  Continuer <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="font-display text-4xl font-bold text-black mb-3">Votre logement</h1>
              <p className="text-gray-500 mb-10">Dites-nous en plus sur l'espace à nettoyer.</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Surface (m²)</label>
                  <input required name="areaSize" type="number" value={formData.areaSize} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nombre de pièces</label>
                  <input required name="rooms" type="number" value={formData.rooms} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Salles de bain</label>
                  <input required name="bathrooms" type="number" value={formData.bathrooms} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all" />
                </div>
              </div>

              <div className="space-y-6 mb-10">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Date et heure souhaitées</label>
                  <div className="space-y-4">
                    <DatePicker 
                      value={formData.date.split(' ')[0] || ''} 
                      onChange={(date) => {
                        const existingTime = formData.date.split(' ')[1] || '09:00';
                        setFormData({...formData, date: `${date} ${existingTime}`});
                      }} 
                    />
                    
                    {formData.date && (
                      <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm animate-in fade-in slide-in-from-top-2 duration-300">
                        <label className="block text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">Créneau horaire</label>
                        <div className="grid grid-cols-4 gap-2">
                          {["08:00", "09:00", "10:00", "11:00", "14:00", "15:00", "16:00", "17:00"].map((time) => {
                            const isSelected = formData.date.endsWith(time);
                            return (
                              <button
                                key={time}
                                type="button"
                                onClick={() => {
                                  const d = formData.date.split(' ')[0];
                                  setFormData({...formData, date: `${d} ${time}`});
                                }}
                                className={`py-2 rounded-xl text-sm font-medium transition-colors ${
                                  isSelected ? "bg-black text-white" : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100"
                                }`}
                              >
                                {time}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Adresse de l'intervention</label>
                  <input required name="address" type="text" placeholder="Numéro et rue" value={formData.address} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all mb-4" />
                  <div className="grid grid-cols-2 gap-4">
                    <input required name="zipCode" type="text" placeholder="Code postal" value={formData.zipCode} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all" />
                    <input required name="city" type="text" placeholder="Ville" value={formData.city} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all" />
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-between border-t border-gray-100 pt-8">
                <button type="button" onClick={handlePrev} className="text-gray-500 font-bold hover:text-black transition-colors px-4 py-2">Retour</button>
                <button type="button" onClick={handleNextStep2} className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center gap-3"> 
                  Continuer <ArrowRight size={18} /> 
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <h1 className="font-display text-4xl font-bold text-black mb-3">Vos coordonnées</h1>
              <p className="text-gray-500 mb-10">Comment pouvons-nous vous recontacter pour finaliser ?</p>

              <div className="grid grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Prénom</label>
                  <input required name="firstName" type="text" value={formData.firstName} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Nom</label>
                  <input required name="lastName" type="text" value={formData.lastName} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all" />
                </div>
              </div>

              <div className="space-y-6 mb-10">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                  <input required name="email" type="email" value={formData.email} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Téléphone</label>
                  <input required name="phone" type="tel" value={formData.phone} onChange={handleChange} className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-black font-medium focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition-all" />
                </div>
              </div>
              
              <div className="flex justify-between items-center border-t border-gray-100 pt-8">
                <button type="button" onClick={handlePrev} className="text-gray-500 font-bold hover:text-black transition-colors px-4 py-2">Retour</button>
                <button type="submit" disabled={isSubmitting} className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center gap-3">
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                </button>
              </div>
            </div>
          )}
          
        </form>
      </div>
    </div>
  );
}
