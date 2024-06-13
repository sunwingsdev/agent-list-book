/* eslint-disable no-irregular-whitespace */
import { useState } from "react";
import "./EditHome.css";
import { FaFacebookSquare, FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import SimpleModal from "../../../component/shared/SimpleModal";
import AccountCreateForm from "../../../component/home/AccountCreateForm";
import AccountCreateProcedureForm from "../../../component/home/AccountCreateProcedureForm";
import AgentListForm from "../../../component/home/AgentListForm";
import SocialLinksForm from "../../../component/home/SocialLinksForm";
import TransactionProcedureForm from "../../../component/home/TransactionProcedureForm";
import ComplaintAgentForm from "../../../component/home/ComplaintAgentForm";
import { Button } from "react-bootstrap";
import AddContentForm from "../../../component/home/AddContentForm";
import { useGetAllContentsQuery } from "../../../redux/features/allApis/homeContentsApi.js/homeContentsApi";

const EditHome = () => {
  const { data } = useGetAllContentsQuery();
  const [card, setCard] = useState("");
  const [show, setShow] = useState(false);
  const [addModalShow, setAddModalShow] = useState(false);

  const handleEditModalOpen = (card) => {
    setCard(card);
    setShow(true);
  };

  const accountCreateData = data?.find(
    (singleContent) => singleContent.option === "account-create"
  );
  const accountCreateProcedureData = data?.find(
    (singleContent) => singleContent.option === "account-create-procedure"
  );
  const agentListData = data?.find(
    (singleContent) => singleContent.option === "agent-list"
  );

  const handleAddContentModal = (card) => {
    setCard(card);
    setAddModalShow(true);
  };

  return (
    <div className="editHomeArea">
      <div className="tabContain">
        {accountCreateData ? (
          <div className="tabContainItem mb-3">
            <h2 className="editText_20">{accountCreateData?.title}</h2>
            <div className="tabsingletext">
              <p className="editText_16">{accountCreateData?.details}</p>
             
            </div>

            <div
              onClick={() => handleEditModalOpen("account-create")}
              className="tabContainItem_Icon"
            >
              <FaRegEdit />
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-between">
            <h2 className="editText_20">
              কিভাবে একাউন্ট খুলবেন? তার বিস্তারিত ফর্ম পূরন করুন
            </h2>
            <Button
              onClick={() => handleAddContentModal("account-create")}
              type="submit"
              variant="primary"
            >
              এখানে ক্লিক করুন
            </Button>
          </div>
        )}
        {accountCreateProcedureData ? (
          <div className="tabContainItem mb-3">
            <h2 className="editText_20">{accountCreateProcedureData?.title}</h2>
            <div className="tabsingletext">
              <p className="editText_16">
                {accountCreateProcedureData?.details}
              </p>
              {accountCreateProcedureData?.detailsList.map((item) => (
                <p key={item} className="mt-4 mt-lg-5">
                  {item}
                </p>
              ))}
            </div>

            <div
              onClick={() => handleEditModalOpen("account-create-procedure")}
              className="tabContainItem_Icon"
            >
              <FaRegEdit />
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-between">
            <h2 className="editText_20">
              কিভাবে একাউন্ট খুলবেন? তার বিস্তারিত ফর্ম পূরন করুন 2
            </h2>
            <Button
              onClick={() => handleAddContentModal("account-create-procedure")}
              type="submit"
              variant="primary"
            >
              এখানে ক্লিক করুন
            </Button>
          </div>
        )}
        {agentListData ? (
          <div className="tabContainItem mb-3">
            <h2 className="editText_20">{agentListData?.title}​</h2>
            <div className="tabsingletext">
              <p className="editText_16">{agentListData?.details}</p>
              <p className="mt-4 mt-lg-5 editText_16">
                অনলাইন মাষ্টার এজেন্ট লিস্টঃ
              </p>
            </div>

            <div
              onClick={() => handleEditModalOpen("agent-list")}
              className="tabContainItem_Icon"
            >
              <FaRegEdit />
            </div>
          </div>
        ) : (
          <div className="d-flex justify-content-between">
            <h2 className="editText_20">
              কিভাবে একাউন্ট খুলবেন? তার বিস্তারিত ফর্ম পূরন করুন 3
            </h2>
            <Button
              onClick={() => handleAddContentModal("agent-list")}
              type="submit"
              variant="primary"
            >
              এখানে ক্লিক করুন
            </Button>
          </div>
        )}
        <div className="tabContainItem mb-3">
          <h2 className="editText_20">এজেন্ট এর বিরুদ্ধে অভিযোগ:​</h2>
          <div className="tabsingletext">
            <p className="editText_16">
              এজেন্ট এর সাথে আপনার যে কোন ধরনের সমস্যা থাকতে পারে। তার কিছু
              উদাহরন নিম্নে দেয়া হলোঃ
            </p>
            <p className="mt-4 mt-lg-5 editText_16">
              ** এজেন্ট ঠিক মত ডিপোজিট বা উইথড্র দিচ্ছে না।
            </p>
            <p className="mt-4 mt-lg-5 editText_16">
              ** এজেন্ট এর সকাল ১০ টা থেকে রাত ১০ টা পর্যন্ত কাজ করার কথা।
              কিন্তু ঠিক মত কাজ করছে না।
            </p>
            <p className="mt-4 mt-lg-5 editText_16">
              ** এজেন্ট ডিপোজিট এর টাকা নিয়েছে কিন্তু ঠিক মত ডিপোজিট দিচ্ছে না।
            </p>
            <p className="editText_16">
              ** আপনার আইডি লক হয়ে গেছে আনলক করছে না।
            </p>
            <p className="mt-4 mt-lg-5 editText_16">
              এই রকম নানা অভিযোগ আপনার থাকতে পারে এজেন্ট এর বিরুদ্ধে। এই অভিযোগ
              গুলোর সমস্যা সমাধানের জন্য আপনাকে প্রথমে জানতে হবে আমাদের আপলাইন
              গুলো কিভাবে কাজ করে এবং কার কাছে অভিযোগ করবেন।
            </p>
            <p className="mt-4 mt-lg-5 editText_16">
              ** মাষ্টার এজেন্ট এর বিরুদ্ধে অভিযোগ করতে হলে আপনাকে তার সুপার
              এজেন্টের কাছে অভিযোগ করতে হবে। যে কোন মাষ্টার এজেন্ট এর সুপার
              এজেন্ট কে তা বের করতে হলে আপনাকে এজেন্টের নামের শেষে কমপ্লেইন বাটন
              এ ক্লিক করতে হবে।
            </p>
            <p className="mt-4 mt-lg-5 editText_16">
              কমপ্লেইন বাটন এ ক্লিক অরলে ঐ মাষ্টার এজেন্ট এর সুপার এজেন্ট এর নাম
              দেখতে পারবেন। তখন আপনি ঐ সুপার এজেন্ট এর কাছে ঐ মাষ্টার এজেন্ট এর
              বিরুদ্ধে অভিযোগ করতে পারবেন। ঠিক সেই রকম ভাবে সুপার এজেন্ট এর নামে
              অভিযোগ করতে পারবেন সাব এডমিন এর কাছে।
            </p>
            <p className="mt-4 mt-lg-5 editText_16">
              আপনি যদি কোন মাষ্টার এজেন্ট এর নামে অভিযোগ করতে চান – তাহলে তার
              সুপার এজেন্ট এর কাছে অভিযোগ করতে হবে। যদি সুপার এজেন্ট এর নামে
              অভিযোগ করতে চান তাহলে সাব এডমিন এর কাছে অভিযোগ করতে হবে। আর সাব
              এডমিন এর নামে অভিযোগ করতে চাইলে এডমিন এর কাছে অভিযোগ করতে হবে।
            </p>
            <p className="mt-4 mt-lg-5 editText_16">
              যদি আপনার অভিযোগের সমাধান কেউ না দিতে পারে তাহলে আপনি সরাসরি মালিক
              (সওদাগর) এর কাছে অভিযোগ করবেন। এবং মালিককে (সওদাগরকে) সব বিষয়
              প্রমান সহ বুঝিয়ে বলবেন।
            </p>
          </div>

          <div
            onClick={() => handleEditModalOpen("complaint-agent")}
            className="tabContainItem_Icon"
          >
            <FaRegEdit />
          </div>
        </div>
        <div className="tabContainItem mb-3">
          <h2 className="editText_20">এজেন্ট লিস্টঃ​</h2>
          <div className="tabsingletext">
            <p className="editText_16">
              👉 ডলার কেনা বেচা নিয়ে সমস্যায় পড়তে হবে না।
            </p>
            <p className="mt-4 editText_16">
              👉 সবসময় বিকাশ/রকেট/নগদের মধ্যমে লেনদেন করতে পারবেন।
            </p>
            <p className="mt-4 editText_16">
              👉 আপনাদের টাকা আমাদের কাছে থাকবে ব্যাংকের মত নিরাপদ।
            </p>
            <p className="mt-4 editText_16">
              👉 লেনদেন হবে আপনার মনের মত একবার লেনদেন করলেই বুঝতে পারবেন
              ইনশাআল্লাহ।
            </p>
            <p className="mt-4 editText_16">
              👉 দেশে আমরাই একমাত্র দ্রসা সার্ভিস প্রদান করি।
            </p>
          </div>

          <div
            onClick={() => handleEditModalOpen("transaction-procedure")}
            className="tabContainItem_Icon"
          >
            <FaRegEdit />
          </div>
        </div>
        <div className="tabContainItem mb-3 tabContainItemBox">
          <div className="tabMarqueText">
            <Typewriter
              words={["Facebook Group", "Join Our", "Official"]}
              loop={0}
              cursor={true}
              cursorColor="#ffdf6e"
            />
            <p className="editText_16">
              আমাদের সকল এডনিন, সাব এডমিন,সুপার এজেন্ট, মাষ্টার এজেন্ট ও ইউজার
              আমাদের ফেইসবুক গ্রুপে যুক্ত আছে। 11WICKETS এর সকল আপডেট পেতে
              এক্ষুনি নিচের facebook চিহ্নিত বাটনে ক্লিক করে আমাদের অফিসিয়াল
              ফেসবুক গ্রুপে যুক্ত হয়ে যান।
            </p>
            <Link className="facebookBtn">
              <FaFacebookSquare />
              FACEBOK GROUP
            </Link>
            <p className="editText_16">
              আপনার সকল জিজ্ঞাসা ও জানার বিষয়ে আমাদের গ্রুপে পোস্ট করুন। সকল
              এজেন্টদের থেকে আপনার পছন্দের এজেন্টকে বেছে নিন এবং নিরাপদে বেটিং
              করুন।
            </p>
          </div>

          <div
            onClick={() => handleEditModalOpen("social-links")}
            className="tabContainItem_Icon"
          >
            <FaRegEdit />
          </div>
        </div>
      </div>
      <>
        {/* edit modals */}
        <SimpleModal
          show={show}
          handleClose={() => setShow(false)}
          handleShow={() => setShow(true)}
        >
          {card === "account-create" && (
            <AccountCreateForm data={accountCreateData} />
          )}
          {card === "account-create-procedure" && (
            <AccountCreateProcedureForm />
          )}
          {card === "transaction-procedure" && <TransactionProcedureForm />}
          {card === "complaint-agent" && <ComplaintAgentForm />}
          {card === "agent-list" && <AgentListForm />}
          {card === "social-links" && <SocialLinksForm />}
        </SimpleModal>
      </>
      <>
        <SimpleModal
          show={addModalShow}
          handleClose={() => setAddModalShow(false)}
          handleShow={() => setAddModalShow(true)}
        >
          <AddContentForm
            card={card}
            handleClose={() => setAddModalShow(false)}
          />
        </SimpleModal>
      </>
    </div>
  );
};

export default EditHome;
