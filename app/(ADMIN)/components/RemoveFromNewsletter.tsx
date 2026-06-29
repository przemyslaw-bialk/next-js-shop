"use client";
import { deleteFromNewsletterAction } from "@/app/actions/newsletter";
import Button from "@/app/components/Button";
import { useState } from "react";

type Prop = {
  id: string;
};

const RemoveFromNewsletter = ({ id }: Prop) => {
  const [showConfirm, setShowConfirm] = useState(false);

  const handleForm = () => {
    setShowConfirm(true);
  };

  const handleClick = async () => {
    await deleteFromNewsletterAction(id);
  };
  return (
    <div>
      <Button onClick={handleForm} className="text-xs">
        Delete
      </Button>
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center gap-2 bg-black/60">
          <Button onClick={handleClick} variant="delete">
            Delete
          </Button>
          <Button onClick={() => setShowConfirm(false)}>cancel</Button>
        </div>
      )}
    </div>
  );
};

export default RemoveFromNewsletter;
