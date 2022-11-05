import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const GeneralInfo = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-3">
        <h1 className="text-[#d83616] font-bold md:text-3xl text-2xl mt-5">
        General Information for Visitors
        </h1>
        <p className="font-bold text-xl">Climate in Bengaluru</p>
        <div>
            <StaticImage
              src="../images/climate.jpg"
              alt="climate"
              objectFit="contain"
              placeholder="blurred"
              width={500}
            />
        </div>
        <p className="text-lg">Bengaluru in December is pleasantly cold. Those coming from hotter climes might find it quite chilly but for those who are used to colder climates might find it pleasant, with the temperature ranging between lows of 16°C (60°F) and highs up to 26°C (131°F). </p>
        <p className="font-bold text-xl">Clothing</p>
        <p className="text-lg">There is no particular dress code for the conference. However, pack a few layers which you may require in the mornings and evenings. There are no clothing restrictions in the city as well, however use your discretion and dress appropriately when visiting public places. Religious places in the city (temples, mosques, churches, gurudwaras) might have dress code restrictions.</p>
        <p className="font-bold text-xl">COVID-19 related norms</p>
        <p className="text-lg">Though it is not mandatory wearing a mask in Bengaluru anymore, we suggest you to please wear the mask at all times and sanitize hands on regular intervals. Any change in the local law/ protocol due to COVID-19 will be communicated at regular intervals as applicable. The conference will be taking all necessary precautions as per the local COVID-19 norms.</p>
        <p className="font-bold text-xl">Time</p>
        <p className="text-lg">India has only one time zone which covers the entire country. Indian Standard Time (IST) is 5 hours and 30 minutes ahead of GMT.</p>
        <p className="font-bold text-xl">Language</p>
        <p className="text-lg">The official language of the conference is English. The local language predominantly spoken in Bengaluru is Kannada, which is a Dravidian language and is the official language of the state of Karnataka. However, more than 40% of the city's population consists of people from states other than Karnataka. Hence, Hindi and English are also widely spoken in the city.</p>
        <p className="font-bold text-xl">Electricity</p>
        <p className="text-lg">The voltage in India is 230 volts. You will require a voltage converter if you are carrying a device that does not accept 230 Volts. Wall sockets accept plugs with two or three round pins. Should you wish to use appliances of 110 volts, most Conference Hotels will provide adaptors on request but it may be useful to carry your own for convenience. Most laptops have adaptors that accept 110-240 volts, but will still need plugs of the type shown below.</p>
        <p className="text-lg">India uses power plugs and sockets of types C, D and M (<span className="text-[#d83616]"><a href="https://www.power-plugs-sockets.com/in/india/" target="_blank">https://www.power-plugs-sockets.com/in/india/</a></span>) though we can find universal sockets in some hotels.</p>
        <div>
            <StaticImage
              src="../images/socket.png"
              alt="socket"
              objectFit="contain"
              placeholder="blurred"
              width={500}
            />
        </div>
        <p className="font-bold text-xl">Currency</p>
        <p className="text-lg">Indian Rupee (₹, INR) is the sole currency accepted in hotels and shops in India. Indian rupee banknotes come in denominations of 500, 200, 100, 50, 20, 10 with coins in denominations of 10, 5, 2, 1 rupee. 100 and 200 rupee banknotes are the most used. You can exchange major currencies into INR at the airport or major banks (IISc has a bank that can help exchange currency). Please log onto <span className="text-[#d83616]"><a href="www.xe.com" target="_blank">www.xe.com</a></span> to calculate the approximate current currency values. </p>
        <p className="font-bold text-xl">Banks</p>
        <p className="text-lg">All the International Banks are represented by Branches in Bengaluru. Bank Hours are 9:30 AM – 5:00 PM from Monday to Friday and 9.30 am -1.30 pm on Saturdays. The 2nd & 4th Saturdays in the month are holidays for the banks in India.</p>
        <p className="font-bold text-xl">Payments</p>
        <p className="text-lg">Visa and Mastercard Credit and Debit cards are generally accepted in all major hotels and shops. American Express has limited acceptance. Point of sale machines that accept cards with chip and PIN. However, you are advised to confirm the merchant if they would accept cards beforehand. UPI (United Payments Interface) is widely used in India for digital payments (using QR codes or phone numbers). </p>
        <p className="font-bold text-xl">Safety and Security</p>
        <ul className="list-disc text-lg list-inside">
            <li>Personal Safety: Bengaluru is a safe city to travel and visit. However, please take care of your belongings while using public transport, avoid venturing alone late at night to unknown or deserted places, and exercise basic caution and use your judgement to be safe.</li>
            <li>Follow the same rules of safety that you follow while travelling anywhere else with respect to using hotel safe deposit boxes and keeping travel documents safe. When in public places, keep them in your hotel or with you all the time when moving about. Always carry the hotel address with you when you leave the hotel.</li>
            <li>It is common to ask passersby for directions when confused/lost and people are usually helpful.</li>
        </ul>
        <p className="font-bold text-xl">Road and Pedestrian Safety</p>
        <p className="text-lg">The rules of the road are simply very different here in India. Indian roads can be chaotic - please be mindful of vehicular traffic. City traffic generally is much slower than in some other parts of the world, and it is very common to see animals amongst moving traffic. Use great caution when crossing streets - pedestrians usually do not get the right of way while crossing roads. Horn blowing is deemed precautionary and is a constant 24-hour reality. Please do not expect sidewalks/footpaths and zebra crossings to be available on all roads.</p>
        <p className="font-bold text-xl">Water</p>
        <p className="text-lg">Always drink bottled water. Do not drink water from the tap. However, tap water is safe to brush your teeth and rinse your mouth.</p>
        <p className="font-bold text-xl">Connectivity</p>
        <p className="text-lg">Wi-Fi connectivity is available at most cafes, restaurants and shopping malls. We suggest you get an Indian SIM with data connection. 4G mobile data is cheap (costs around ₹500 for a connection valid for a month with a 2GB/day limit) and would be very useful. </p>
        <p className="font-bold text-xl">Smoking</p>
        <p className="text-lg">All public areas are non-smoking except for specifically labelled smoking areas.</p>
        <p className="font-bold text-xl">Alcohol Consumption</p>
        <p className="text-lg">There are plenty of shops selling liquor of all varieties where the price will be around 50% less than the same brand served in a hotel. The pubs/bars/restaurants generally are open till 1 AM, unless mentioned specifically. Individuals who wish to continue to partake of alcoholic beverages after 1 a.m. may only do so via room service orders within hotels.</p>
        <p className="font-bold text-xl">Insurance and Liability</p>
        <p className="text-lg">The organizers do not take responsibility for any individual, medical, travel or personal insurance. Participants are advised to secure their own insurance policies before departure from their countries, as required.</p>
        <p className="text-lg">While every attempt is made to ensure efficient, trouble-free hospitality, including hotel accommodation, sightseeing and tours, participants are advised that no liability accrues to the Organizers in the event of any necessary modifications, including change in itineraries for tours due to delays or cancellations of flights/other exigencies beyond the Organizers' control.</p>
        <p className="font-bold text-xl">Restrictions on Export of Articles</p>
        <ul className="list-disc text-lg list-inside">
            <li>Export of all wild animals indigenous to the country and articles made from such listed animals like skins, pelts, furs, ivory, rhino horns, trophies are totally banned.</li>
            <li>Banned items do not include peacock feathers and handicrafts made from them.</li>
            <li>Antiques which include sculpture, painting or other works of arts or crafts illustrative of science, art, craft, religion of bygone ages and of historical interest which have been in existence for not less than 100 years may not be exported from India.</li>
            <li>Manuscripts or other documents of scientific, historical literary or aesthetic value in existence for not less that seventy-five years: art treasures not necessarily antiques but of artistic or aesthetic value, also cannot be exported out of India.</li>
        </ul>
        <p className="font-bold text-xl">Food and Drink</p>
        <ul className="list-disc text-lg list-inside">
            <li>Be careful what you eat. Steer clear of uncooked or unpeeled fruit and vegetables outside the hotels / quality restaurants. Do sample local restaurants too, but use your good judgment. If it looks iffy, take a pass.</li>
            <li>Eat meats only in restaurants of a good hygienic standard.</li>
            <li>Curd or yoghurt is served with most Indian meals. It is a natural aid to digestion and helps to temper the spicy food too.</li>
            <li>Do not eat fried food cooked on the streets.</li>
            <li>Ask the organizing team/volunteers for suggestions on restaurants/pubs/bars to explore in the city!</li>
        </ul>
        <p className="font-bold text-xl">Tipping and Gratuities</p>
        <p className="text-lg">Tipping Practices are similar to most other parts of the world. Most restaurants include a service charge of 10% in the bills, but tipping in general is at customers' discretion which could vary from 2% to 8%. The local currency is preferred while tipping. Naturally, it's never compulsory and should only be done if you're happy with the service. However, tipping is not a common practice while using a radio taxi/ call taxi (like Uber, Ola) or even autos (tuktuks).</p>
        <p className="font-bold text-xl">Others</p>
        <ul className="list-disc text-lg list-inside">
            <li>Keep extra photocopies of the relevant pages of your passport in a safe place.</li>
            <li>Taxi and auto-rickshaw fares keep changing, and therefore do not always conform to readings on meters. Insist on seeing the latest rate card, available with the driver, and pay accordingly. Avoid taxis that pick up additional passengers.</li>
            <li>Be wary of impostor porters or guides at monuments. Assure that they are properly uniformed or identified. Never leave your luggage, briefcase, laptops or other items unattended.</li>
            <li>Insist on the taxi / auto meter being flagged down in your presence.</li>
            <li>In cities you can change most major foreign currencies and brands of travellers' cheques but you'll widen your options and save yourself hassles if you stick to US dollars or pounds sterling or Euro.</li>
        </ul> 
      </div>
    </div>
  );
};

export default GeneralInfo;
