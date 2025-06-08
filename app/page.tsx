"use client";

import { useTwZipCode, cities, districts } from "use-tw-zipcode";
import Script from "next/script";

export default function Home() {
  const { city, district, zipCode, handleCityChange, handleDistrictChange } =
    useTwZipCode();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "台灣郵遞區號查詢",
    description:
      "使用 use-tw-zipcode React Hook 來查詢台灣郵遞區號，提供完整的縣市和鄉鎮市區選擇功能。",
    applicationCategory: "UtilityApplication",
    operatingSystem: "Any",
    author: {
      "@type": "Person",
      name: "Gary Lai",
      url: "https://github.com/imgarylai",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "TWD",
    },
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen p-8">
        <div className="max-w-2xl mx-auto">
          <header>
            <h1 className="text-3xl font-bold mb-8">台灣郵遞區號查詢</h1>
          </header>

          <section aria-label="郵遞區號查詢工具" className="space-y-4">
            <div>
              <label
                htmlFor="city-select"
                className="block text-sm font-medium mb-1"
              >
                縣市
              </label>
              <select
                id="city-select"
                value={city}
                onChange={(e) => handleCityChange(e.target.value)}
                className="w-full p-2 border rounded"
                aria-label="選擇縣市"
              >
                {cities.map((city, i) => (
                  <option key={i}>{city}</option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="district-select"
                className="block text-sm font-medium mb-1"
              >
                鄉鎮市區
              </label>
              <select
                id="district-select"
                value={district}
                onChange={(e) => handleDistrictChange(e.target.value)}
                className="w-full p-2 border rounded"
                aria-label="選擇鄉鎮市區"
              >
                {districts[city]?.map((district, i) => (
                  <option key={i}>{district}</option>
                ))}
              </select>
            </div>

            <div className="mt-8 p-4 bg-gray-100 rounded">
              <h2 className="text-lg font-semibold mb-2">選擇結果：</h2>
              <dl className="space-y-1">
                <div>
                  <dt className="inline font-medium">縣市：</dt>
                  <dd className="inline">{city}</dd>
                </div>
                <div>
                  <dt className="inline font-medium">鄉鎮市區：</dt>
                  <dd className="inline">{district}</dd>
                </div>
                <div>
                  <dt className="inline font-medium">郵遞區號：</dt>
                  <dd className="inline">{zipCode}</dd>
                </div>
              </dl>
            </div>
          </section>

          <footer className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">關於 use-tw-zipcode</h2>
            <p className="mb-4">
              這是一個用於處理台灣郵遞區號的 React Hook，提供以下功能：
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>台灣縣市和鄉鎮市區的選擇</li>
              <li>自動計算郵遞區號</li>
              <li>提供完整的縣市和鄉鎮市區資料</li>
            </ul>
            <div className="space-y-2">
              <p className="font-medium">GitHub 連結：</p>
              <a
                href="https://github.com/imgarylai/use-tw-zipcode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
                aria-label="前往 use-tw-zipcode GitHub 專案"
              >
                https://github.com/imgarylai/use-tw-zipcode
              </a>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
