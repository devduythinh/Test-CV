"use client";

import Paperclip from "@/public/icons/paperClip.svg";
import SendIcon from "@/public/icons/send.svg";
import Image from "next/image";
import Button from "../../Atomic/Button";

const InputStyled = ({ ...props }) => {
  return (
    <input
      type="text"
      className="w-full p-3 border focus:outline-none focus:ring-2 focus:ring-red-500 shadow-[#F2542D1A]/10 shadow-lg rounded-full"
      {...props}
    />
  );
};

export default function BookingForm() {
  return (
    <form className="w-full py-10 space-y-4">
      <div className="flex gap-2 sm:gap-4 ">
        <div className="w-20 sm:w-[120px]">
          <p className="text-base sm:text-2xl text-activityText ">Nom:</p>
        </div>
        <div className="flex-1">
          <InputStyled placeholder="Entrez votre nom" />
        </div>
      </div>
      <div className="flex gap-2 sm:gap-4 ">
        <div className="w-20 sm:w-[120px]">
          <p className="text-base sm:text-2xl text-activityText ">Email:</p>
        </div>
        <div className="flex-1">
          <InputStyled placeholder="Entrez votre e-mail" />
        </div>
      </div>
      <div className="flex gap-2 sm:gap-4 ">
        <div className="w-20 sm:w-[120px]">
          <p className="text-base sm:text-2xl text-activityText ">Message:</p>
        </div>
        <div className="flex-1">
          <textarea
            type="text"
            rows={4}
            placeholder="Entrez votre nom"
            className="w-full p-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 shadow-[#F2542D1A]/10 shadow-lg"
          />
        </div>
      </div>
      <div className="flex gap-2 sm:gap-4 ">
        <div className="w-20 sm:w-[120px]">
          <p className="text-base sm:text-2xl text-activityText ">Fichier:</p>
        </div>
        <div className="flex-1 flex gap-2 items-center flex-wrap ">
          <div className="flex gap-2 items-center">
            <Image
              src={Paperclip}
              alt="paperclip"
              width={23}
              height={26}
              className="w-5 h-5"
            />
            <p className="text-xl font-medium text-[#1E88F9] ">Pièce jointe</p>
          </div>
          <p className="text-lg text-[#999999] ">(*fichiers pdf uniquement)</p>
        </div>
      </div>
      <div className="flex sm:justify-end justify-between gap-4">
        <Button type="activity" className="rounded-full max-w-[200px] w-full">
          Clear All
        </Button>
        <Button
          type="explore"
          className="rounded-full max-w-[200px] w-full text-"
          iconAfter={<Image src={SendIcon} alt="send" width={24} height={24} />}
        >
          Envoyer
        </Button>
      </div>
    </form>
  );
}
