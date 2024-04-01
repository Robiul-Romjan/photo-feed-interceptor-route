import Modal from "@/components/Modal";
import PhotoDetail from "@/components/PhotoDetail";
import React from "react";

const page = ({ params: { id, lang } }) => {
  return (
    <Modal>
      <PhotoDetail id={id} lang={lang} />
    </Modal>
  );
};

export default page;
