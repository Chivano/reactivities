import React, { useState, ChangeEvent } from "react";

import { Segment, Form, Button } from "semantic-ui-react";
import { Activity } from "../../app/models/activity";

interface Props {
  activity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
}

export default function ActivityForm({
  activity: selectedActivity,
  closeForm,
  createOrEdit,
}: Props) {
  const initalState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState<Activity>(initalState);

  function handleSubmit() {
    createOrEdit(activity);
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Form.Input
          value={activity.title}
          name="title"
          onChange={handleInputChange}
          placeholder="Title"
        />
        <Form.TextArea
          value={activity.description}
          name="description"
          onChange={handleInputChange}
          placeholder="Description"
        />
        <Form.Input
          value={activity.category}
          name="category"
          onChange={handleInputChange}
          placeholder="Category"
        />
        <Form.Input
          value={activity.date}
          name="date"
          onChange={handleInputChange}
          placeholder="Date"
        />
        <Form.Input
          value={activity.city}
          name="city"
          onChange={handleInputChange}
          placeholder="City"
        />
        <Form.Input
          value={activity.venue}
          name="venue"
          onChange={handleInputChange}
          placeholder="Venue"
        />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          onClick={closeForm}
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}
