"use client";

import { useEffect, useState } from "react";
import { SettingsModal } from "../modals/settingMadal";
import { CoverImageModal } from "../modals/coverImageModal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  );
};
