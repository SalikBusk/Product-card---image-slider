'use client';

import MaxWidthWrapper from "@/Components/MaxWidthWrapper";
import { useRouter } from "next/router";

const Modal = () => {

  const router = useRouter()

  return (
    <>
    <div className="fixed inset-0 h-screen w-full bg-gray-600 bg-opacity-50 overflow-y-auto flex items-center justify-center">
        <MaxWidthWrapper>
          modal
      </MaxWidthWrapper>
    </div>
    </>
  )
}

export default Modal