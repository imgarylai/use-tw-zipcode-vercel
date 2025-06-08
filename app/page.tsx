"use client";

import { useTwZipCode, cities, districts } from "use-tw-zipcode";

export default function Home() {
  const { city, district, zipCode, handleCityChange, handleDistrictChange } =
    useTwZipCode();

  return (
    <main className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">台灣郵遞區號查詢</h1>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">縣市</label>
            <select
              value={city}
              onChange={(e) => handleCityChange(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {cities.map((city, i) => (
                <option key={i}>{city}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">鄉鎮市區</label>
            <select
              value={district}
              onChange={(e) => handleDistrictChange(e.target.value)}
              className="w-full p-2 border rounded"
            >
              {districts[city]?.map((district, i) => (
                <option key={i}>{district}</option>
              ))}
            </select>
          </div>

          <div className="mt-8 p-4 bg-gray-100 rounded">
            <h2 className="text-lg font-semibold mb-2">選擇結果：</h2>
            <p>縣市：{city}</p>
            <p>鄉鎮市區：{district}</p>
            <p>郵遞區號：{zipCode}</p>
          </div>
        </div>

        <div className="mt-12 p-6 bg-blue-50 rounded-lg">
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
            >
              https://github.com/imgarylai/use-tw-zipcode
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
