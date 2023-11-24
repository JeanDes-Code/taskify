import { OrganizationProfile } from "@clerk/nextjs";

const SettingsPage = () => {
  return (
    <div className="w-full">
      <OrganizationProfile
        appearance={{
          elements: {
            rootBox: {
              boxShadow: "none",
              width: "98%",
            },
            card: {
              border: "1px solid #e5e5e5",
              boxShadow: "none",
              width: "98%",
            },
          },
        }}
      />
    </div>
  );
};

export default SettingsPage;
