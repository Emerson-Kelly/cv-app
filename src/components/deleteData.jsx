import { Button } from "@/components/ui/button";

export default function DeleteButton({ data, onClear }) {
  const deleteData = () => {
    if (onClear) {
      onClear();
    }

    const personalDetailsContainer = document.getElementById(
      "personal-details-container"
    );
    const educationContainer = document.getElementById("education-container");
    const firstExperienceContainer = document.getElementById(
      "first-experience-container"
    );
    const secondExperienceContainer = document.getElementById(
      "second-experience-container"
    );
    const thirdExperienceContainer = document.getElementById(
      "third-experience-container"
    );
    const fourthExperienceContainer = document.getElementById(
      "fourth-experience-container"
    );

    if (personalDetailsContainer) {
      personalDetailsContainer.style.display = "none";
    }

    if (educationContainer) {
      educationContainer.style.display = "none";
    }

    if (firstExperienceContainer) {
      firstExperienceContainer.style.display = "none";
    }

    if (secondExperienceContainer) {
      secondExperienceContainer.style.display = "none";
    }

    if (thirdExperienceContainer) {
      thirdExperienceContainer.style.display = "none";
    }

    if (fourthExperienceContainer) {
      fourthExperienceContainer.style.display = "none";
    }
  };

  return (
    <Button className="text-red-500" variant="link" onClick={deleteData}>
      Clear
    </Button>
  );
}
