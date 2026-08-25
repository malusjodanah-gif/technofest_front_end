import { useState } from "react";
import Card from "../../components/ui/Card";
import Button from "../../components/ui/Button";
import Input from "../../components/ui/Input";

export default function MentorProfile() {
  const [profile, setProfile] = useState({
    name: "Dr. Michael James",
    institution: "PNG University of Technology",
    role: "Lecturer",
    email: "michael@example.com",
    phone: "+675 12345678",
    availability: "Available",
  });

  const update = (field, value) => {
    setProfile({
      ...profile,
      [field]: value,
    });
  };

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-3xl font-bold text-[#800000]">
        Mentor Profile
      </h1>

      <Card>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Profile saved");
          }}
          className="space-y-5"
        >
          {Object.entries(profile).map(([field, value]) => (
            <div key={field}>
              <Input
                label={field}
                value={value}
                onChange={(e) =>
                  update(field, e.target.value)
                }
              />
            </div>
          ))}

          <Button type="submit">
            Save Profile
          </Button>
        </form>
      </Card>
    </div>
  );
}
