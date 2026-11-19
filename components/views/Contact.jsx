"use client";

import { useRef, useState, Suspense } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaRegCheckCircle } from "react-icons/fa";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const icons = {
  phone: <FaWhatsapp />,
  email: <FaEnvelope />,
  location: <FaMapMarkerAlt />,
};

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { getContent } from "@/lib/i18n";

const ContactPage = ({ lang }) => {
  const t = getContent(lang).contact;
  const info = t.info.map((item) => ({ ...item, icon: icons[item.type] }));
  const searchParams = useSearchParams();
  const search = searchParams.get("q");
  const [error, setError] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [sendError, setSendError] = useState(false);
  const topic = useRef();
  const firstName = useRef();
  const lastname = useRef();
  const email = useRef();
  const phone = useRef();
  const description = useRef();

  function submitForm() {
    if (
      firstName.current.value !== "" &&
      lastname.current.value !== "" &&
      topic.current.textContent !== "" &&
      topic.current.textContent !== t.topicPlaceholder &&
      email.current.value !== "" &&
      description.current.value !== ""
    ) {
      setError(false);
      setSendError(false);
      setLoading(true);
      fetch("https://formsubmit.co/ajax/davidthbsossa@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Asunto: t.emailSubject,
          Correo: email.current.value,
          Telefono: phone.current.value,
          Nombre: `${firstName.current.value} ${lastname.current.value}`,
          Servicio: topic.current.textContent,
          Mensaje: description.current.value,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success === false || data.success === "false") {
            throw new Error(data.message);
          }
          setLoading(false);
          setConfirmation(true);

          setTimeout(() => {
            setConfirmation(false);
          }, 6000);
        })
        .catch(() => {
          setLoading(false);
          setSendError(true);
        });
    } else {
      setError(true);
    }
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
              action={submitForm}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">{t.title}</h3>
              <p className="text-white/60">
                {t.intro}
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="firstname"
                  placeholder={t.placeholders.firstName}
                  ref={firstName}
                  onChange={() => setError(false)}
                />
                <Input
                  type="lastname"
                  placeholder={t.placeholders.lastName}
                  ref={lastname}
                  onChange={() => setError(false)}
                />
                <Input
                  type="email"
                  placeholder={t.placeholders.email}
                  ref={email}
                  onChange={() => setError(false)}
                />
                <Input
                  type="phone"
                  placeholder={t.placeholders.phone}
                  ref={phone}
                  onChange={() => setError(false)}
                />
              </div>
              {/* select */}

              <Select
                defaultValue={
                  t.topics.find((topic) => topic.slug === search)?.label ?? ""
                }
              >
                <SelectTrigger ref={topic} className="w-full">
                  <SelectValue placeholder={t.topicPlaceholder} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {t.topics.map((item) => (
                      <SelectItem key={item.slug} value={item.label}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              {/* textarea */}
              <Textarea
                ref={description}
                className="h-[200px]"
                placeholder={t.placeholders.message}
                onChange={() => setError(false)}
              />
              {/* btn */}
              <div className="w-full flex justify-between items-center">
                {loading ? (
                  <span
                    size="md"
                    className="min-w-40 h-[48px] flex justify-center items-center"
                  >
                    {t.sending}
                  </span>
                ) : (
                  <Button size="md" className="min-w-40">
                    {t.send}
                  </Button>
                )}
                {confirmation && (
                  <p className="text-sm flex gap-1 items-center">
                    <FaRegCheckCircle className="text-[#01C9A0]" />
                    <span>{t.sent}</span>
                  </p>
                )}
                {error && (
                  <p className="text-xs text-[#fe4d5f]">
                    {t.missingFields}
                  </p>
                )}
                {sendError && (
                  <p className="text-xs text-[#fe4d5f]">
                    {t.sendFailed}
                  </p>
                )}
              </div>
            </form>
          </div>
          {/* info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <Link
                    key={index}
                    className={cn(
                      "flex items-center gap-6",
                      item.href
                        ? "cursor-pointer hover:bg-[#27272c] rounded-md transition-all duration-300"
                        : "cursor-default pointer-events-none",
                    )}
                    target={item.href?.startsWith("http") ? "_blank" : undefined}
                    href={item.href ?? "#"}
                  >
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <span className="text-white/60">{item.title}</span>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

const Contact = ({ lang }) => {
  return (
    <Suspense>
      <ContactPage lang={lang} />
    </Suspense>
  );
};

export default Contact;
