import getEnv from "@/lib/env-entry";
import getUnicodeFlagIcon from "country-flag-icons/unicode";
import { useEffect, useState } from "react";

export default function ServerFlag({ country_code }: { country_code: string }) {
  const [supportsEmojiFlags, setSupportsEmojiFlags] = useState(false);

  const useSvgFlag = getEnv("NEXT_PUBLIC_ForceUseSvgFlag") === "true";

  useEffect(() => {
    if (useSvgFlag) {
      // 如果环境变量要求直接使用 SVG，则无需检查 Emoji 支持
      setSupportsEmojiFlags(false);
      return;
    }

    const checkEmojiSupport = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const emojiFlag = "🇺🇸"; // 使用美国国旗作为测试
      if (!ctx) return;
      ctx.fillStyle = "#000";
      ctx.textBaseline = "top";
      ctx.font = "32px Arial";
      ctx.fillText(emojiFlag, 0, 0);

      const support = ctx.getImageData(16, 16, 1, 1).data[3] !== 0;
      setSupportsEmojiFlags(support);
    };

    checkEmojiSupport();
  }, [useSvgFlag]); // 将 `useSvgFlag` 作为依赖，当其变化时重新触发

  if (!country_code) return null;

  if (supportsEmojiFlags && country_code.toLowerCase() === "tw") {
    country_code = "cn";
  }

  return (
    <span className="text-[12px] text-muted-foreground">
      {useSvgFlag || !supportsEmojiFlags ? (
        <span className={`fi fi-${country_code}`}></span>
      ) : (
        getUnicodeFlagIcon(country_code)
      )}
    </span>
  );
}
