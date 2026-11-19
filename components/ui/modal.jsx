import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import "./modal.scss";
import { FaX } from "react-icons/fa6";
import { Button } from "./button";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { getContent, localePath } from "@/lib/i18n";

const Modal = ({ title, description, slug, lang = "es" }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
        <BsArrowDownRight className="text-primary text-3xl" />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="DialogOverlay" />
      <Dialog.Content className="DialogContent">
        <div className="flex flex-col">
          <Dialog.Title className="DialogTitle">
            <span className="text-xl">{title}</span>
            <Dialog.Close asChild>
              <button className="IconButton" aria-label="Close">
                <FaX />
              </button>
            </Dialog.Close>
          </Dialog.Title>

          <div className="body">
            <Dialog.Description className="DialogDescription">
              {description}
            </Dialog.Description>
          </div>

          <div
            style={{
              display: "flex",
              marginTop: 25,
              justifyContent: "flex-end",
            }}
          >
            <Link
              className="link-action"
              href={`${localePath(lang, "/contact/")}?q=${slug}`}
            >
              <Button className="btn-action">
                {getContent(lang).contactMe}
              </Button>
            </Link>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default Modal;
