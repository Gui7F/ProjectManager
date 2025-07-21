'use client'
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./components/LanguageSwitcher";

export default function Home() {
  const {t} = useTranslation();
  return (
    <div className="">
       <div>
         <h1>Project Manager</h1> 
         <LanguageSwitcher/>
       </div>
       <div>{t("home.principal_phase")}</div>
       <div>{t("home.sub_phase")}</div>
    </div>
  );
}
