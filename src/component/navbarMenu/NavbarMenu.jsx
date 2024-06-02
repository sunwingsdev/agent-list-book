/* eslint-disable no-irregular-whitespace */
import "./navbarmenu.css";
import { Tab, Nav } from "react-bootstrap";
import { IoHome } from "react-icons/io5";
import {
  FaUserGraduate,
  FaUserTie,
  FaWhatsappSquare,
  FaFacebookSquare,
} from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import AOS from "aos";
import "aos/dist/aos.css";
import TabData from "../home/TabData";

AOS.init();

const NavbarMenu = () => {
  return (
    <div className="tabsArea">
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <div className="tabsMenuItemBox">
          <Nav.Link eventKey="first" className="tabsBox_1">
            <IoHome className="tabsIcon" />
            Home
          </Nav.Link>
          <Nav.Link eventKey="second" className="tabsBox_1">
            <FaUserGraduate className="tabsIcon" />
            Admin
          </Nav.Link>
          <Nav.Link eventKey="third" className="tabsBox_1">
            <FaUserGraduate className="tabsIcon" />
            Sub Admin
          </Nav.Link>
          <Nav.Link eventKey="four" className="tabsBox_1">
            <FaUserTie className="tabsIcon" />
            Super
          </Nav.Link>
          <Nav.Link eventKey="five" className="tabsBox_1">
            <FaUserTie className="tabsIcon" />
            Master
          </Nav.Link>
          <Nav.Link eventKey="six" className="tabsBox_1">
            <RiCustomerService2Line className="tabsIcon" />
            Service
          </Nav.Link>
        </div>

        <Tab.Content>
          <Tab.Pane eventKey="first">
            <div className="tabContain" data-aos="fade-up">
              <div className="tabContainItem">
                <h2>QUICK MASTER AGENT</h2>
                <div className="tabMaster">
                  <h3>MASTER</h3>
                  <span>001</span>
                  <Link>
                    <FaWhatsappSquare className="whatsAppIcon" />
                  </Link>
                  <Link className="tabNumber">+17707648880</Link>
                </div>
              </div>
            </div>
            <div className="tabContain" data-aos="flip-left">
              <div className="tabContainItem">
                <h2>কিভাবে একাউন্ট খুলবেন?</h2>
                <div className="tabsingletext">
                  <p>
                    একাউন্ট খুলতে উপরের মেনু থেকে এজেন্ট লিস্ট এ ক্লিক করুন।
                    এজেন্ট লিষ্ট এর এজেন্ট দের সাথে ইউজার দের শুধু মাত্র
                    হোয়াটসঅ্যাপ এর মাধ্যমে যোগাযোগ করতে হবে। হোয়াটসঅ্যাপ ছাড়া
                    অন্য কোন মাধ্যমে যোগাযোগ করলে বা লেনদেন করলে তা গ্রহনযোগ্য
                    হবে না। হোয়াটসঅ্যাপ এ যোগাযোগ করতে হলে এজেন্ট লিস্টে
                    হোয়াটসঅ্যাপ আইকনের উপরে ক্লিক করুন অথবা ফোন নাম্বার টি
                    মোবাইলে সেভ করে তাকে হোয়াটসাপ এ ম্যাসেজ পাঠাতে পারবেন।
                    হোয়াটসঅ্যাপ টি আপনার মোবাইলে আগে থেকেই থাকতে হবে। না থাকলে
                    গুগুল প্লে ষ্টোর থেকে ডাউনলোড করে ইনষ্টল করে নিন।
                  </p>
                  <p className="mt-4 mt-lg-5">অনলাইন মাষ্টার এজেন্ট লিস্টঃ</p>
                </div>
              </div>
            </div>
            <div className="tabContain" data-aos="flip-right">
              <div className="tabContainItem">
                <h2>এজেন্ট লিস্টঃ</h2>
                <div className="tabsingletext">
                  <p>
                    11WICKETS এ একাউন্ট করতে হলে আপনাকে এজেন্ট এর মাধ্যমে
                    একাউন্ট খুলতে হবে। এজেন্ট এর মাধ্যমেই টাকা ডিপোজিট এবং
                    উইথড্র করতে হবে। আপনি যে এজেন্ট এর কাছ থেকে একাউন্ট খুলে
                    নিবেন তার সাথেই সব সময় লেনদেন করতে হবে। ঠিক কোন এজেন্ট কে
                    টাকা দিবেন এবং কিভাবে তার সাথে লেনদেন করবেন তা বুঝতে হলে
                    আপনার নিম্নের তথ্য গুলো পড়া জরুরী ঃ
                  </p>
                </div>
              </div>
            </div>
            <div className="tabContain" data-aos="flip-up">
              <div className="tabContainItem">
                <h2>এজেন্ট লিস্টঃ​</h2>
                <div className="tabsingletext">
                  <p>
                    একাউন্ট খুলতে উপরের মেনু থেকে এজেন্ট লিস্ট এ ক্লিক করুন।
                    এজেন্ট লিষ্ট এর এজেন্ট দের সাথে ইউজার দের শুধু মাত্র
                    হোয়াটসঅ্যাপ এর মাধ্যমে যোগাযোগ করতে হবে। হোয়াটসঅ্যাপ ছাড়া
                    অন্য কোন মাধ্যমে যোগাযোগ করলে বা লেনদেন করলে তা গ্রহনযোগ্য
                    হবে না। হোয়াটসঅ্যাপ এ যোগাযোগ করতে হলে এজেন্ট লিস্টে
                    হোয়াটসঅ্যাপ আইকনের উপরে ক্লিক করুন অথবা ফোন নাম্বার টি
                    মোবাইলে সেভ করে তাকে হোয়াটসাপ এ ম্যাসেজ পাঠাতে পারবেন।
                    হোয়াটসঅ্যাপ টি আপনার মোবাইলে আগে থেকেই থাকতে হবে। না থাকলে
                    গুগুল প্লে ষ্টোর থেকে ডাউনলোড করে ইনষ্টল করে নিন।
                  </p>
                  <p className="mt-4 mt-lg-5">অনলাইন মাষ্টার এজেন্ট লিস্টঃ</p>
                </div>
              </div>
            </div>
            <div className="tabContain" data-aos="flip-down">
              <div className="tabContainItem">
                <h2>এজেন্ট এর বিরুদ্ধে অভিযোগ:​</h2>
                <div className="tabsingletext">
                  <p>
                    এজেন্ট এর সাথে আপনার যে কোন ধরনের সমস্যা থাকতে পারে। তার
                    কিছু উদাহরন নিম্নে দেয়া হলোঃ
                  </p>
                  <p className="mt-4 mt-lg-5">
                    ** এজেন্ট ঠিক মত ডিপোজিট বা উইথড্র দিচ্ছে না।
                  </p>
                  <p className="mt-4 mt-lg-5">
                    ** এজেন্ট এর সকাল ১০ টা থেকে রাত ১০ টা পর্যন্ত কাজ করার কথা।
                    কিন্তু ঠিক মত কাজ করছে না।
                  </p>
                  <p className="mt-4 mt-lg-5">
                    ** এজেন্ট ডিপোজিট এর টাকা নিয়েছে কিন্তু ঠিক মত ডিপোজিট
                    দিচ্ছে না।
                  </p>
                  <p>** আপনার আইডি লক হয়ে গেছে আনলক করছে না।</p>
                  <p className="mt-4 mt-lg-5">
                    এই রকম নানা অভিযোগ আপনার থাকতে পারে এজেন্ট এর বিরুদ্ধে। এই
                    অভিযোগ গুলোর সমস্যা সমাধানের জন্য আপনাকে প্রথমে জানতে হবে
                    আমাদের আপলাইন গুলো কিভাবে কাজ করে এবং কার কাছে অভিযোগ করবেন।
                  </p>
                  <p className="mt-4 mt-lg-5">
                    ** মাষ্টার এজেন্ট এর বিরুদ্ধে অভিযোগ করতে হলে আপনাকে তার
                    সুপার এজেন্টের কাছে অভিযোগ করতে হবে। যে কোন মাষ্টার এজেন্ট
                    এর সুপার এজেন্ট কে তা বের করতে হলে আপনাকে এজেন্টের নামের
                    শেষে কমপ্লেইন বাটন এ ক্লিক করতে হবে।
                  </p>
                  <p className="mt-4 mt-lg-5">
                    কমপ্লেইন বাটন এ ক্লিক অরলে ঐ মাষ্টার এজেন্ট এর সুপার এজেন্ট
                    এর নাম দেখতে পারবেন। তখন আপনি ঐ সুপার এজেন্ট এর কাছে ঐ
                    মাষ্টার এজেন্ট এর বিরুদ্ধে অভিযোগ করতে পারবেন। ঠিক সেই রকম
                    ভাবে সুপার এজেন্ট এর নামে অভিযোগ করতে পারবেন সাব এডমিন এর
                    কাছে।
                  </p>
                  <p className="mt-4 mt-lg-5">
                    আপনি যদি কোন মাষ্টার এজেন্ট এর নামে অভিযোগ করতে চান – তাহলে
                    তার সুপার এজেন্ট এর কাছে অভিযোগ করতে হবে। যদি সুপার এজেন্ট
                    এর নামে অভিযোগ করতে চান তাহলে সাব এডমিন এর কাছে অভিযোগ করতে
                    হবে। আর সাব এডমিন এর নামে অভিযোগ করতে চাইলে এডমিন এর কাছে
                    অভিযোগ করতে হবে।
                  </p>
                  <p className="mt-4 mt-lg-5">
                    যদি আপনার অভিযোগের সমাধান কেউ না দিতে পারে তাহলে আপনি সরাসরি
                    মালিক (সওদাগর) এর কাছে অভিযোগ করবেন। এবং মালিককে (সওদাগরকে)
                    সব বিষয় প্রমান সহ বুঝিয়ে বলবেন।
                  </p>
                </div>
              </div>
            </div>
            <div className="tabContain" data-aos="zoom-in">
              <div className="tabContainItem">
                <h2>কেন আমাদের সাইটে একাউন্ট করবেনঃ​​</h2>
                <div className="tabsingletext">
                  <p>👉 ডলার কেনা বেচা নিয়ে সমস্যায় পড়তে হবে না।</p>
                  <p className="mt-4">
                    👉 সবসময় বিকাশ/রকেট/নগদের মধ্যমে লেনদেন করতে পারবেন।
                  </p>
                  <p className="mt-4">
                    👉 আপনাদের টাকা আমাদের কাছে থাকবে ব্যাংকের মত নিরাপদ।
                  </p>
                  <p className="mt-4">
                    👉 লেনদেন হবে আপনার মনের মত একবার লেনদেন করলেই বুঝতে পারবেন
                    ইনশাআল্লাহ।
                  </p>
                  <p className="mt-4">
                    👉 দেশে আমরাই একমাত্র দ্রসা সার্ভিস প্রদান করি।
                  </p>
                </div>
              </div>
            </div>
            <div className="tabContain" data-aos="zoom-in-down">
              <div className="tabContainItemImg">
                <div className="tabMarqueText">
                  <Typewriter
                    words={["Facebook Group", "Join Our", "Official"]}
                    loop={0}
                    cursor={true}
                    cursorColor="#ffdf6e"
                  />
                  <p>
                    আমাদের সকল এডনিন, সাব এডমিন,সুপার এজেন্ট, মাষ্টার এজেন্ট ও
                    ইউজার আমাদের ফেইসবুক গ্রুপে যুক্ত আছে। 11WICKETS এর সকল
                    আপডেট পেতে এক্ষুনি নিচের facebook চিহ্নিত বাটনে ক্লিক করে
                    আমাদের অফিসিয়াল ফেসবুক গ্রুপে যুক্ত হয়ে যান।
                  </p>
                  <Link className="facebookBtn">
                    <FaFacebookSquare />
                    FACEBOK GROUP
                  </Link>
                  <p>
                    আপনার সকল জিজ্ঞাসা ও জানার বিষয়ে আমাদের গ্রুপে পোস্ট করুন।
                    সকল এজেন্টদের থেকে আপনার পছন্দের এজেন্টকে বেছে নিন এবং
                    নিরাপদে বেটিং করুন।
                  </p>
                </div>
              </div>
            </div>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
            <TabData tableHeading={"ADMIN"} />
          </Tab.Pane>
          <Tab.Pane eventKey="third">
            <TabData tableHeading={"SUB ADMIN"} />
          </Tab.Pane>
          <Tab.Pane eventKey="four">
            <TabData tableHeading={"SUPER AGENT LIST"} />
          </Tab.Pane>
          <Tab.Pane eventKey="five">
            <TabData tableHeading={"MASTER"} />
          </Tab.Pane>
          <Tab.Pane eventKey="six">
            <TabData tableHeading={"SERVICE"} />
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </div>
  );
};

export default NavbarMenu;
