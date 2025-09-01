"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, School, CheckCircle, AlertCircle, Image as ImageIcon } from "lucide-react";

const schema = yup.object().shape({
  name: yup.string().required("School name is required"),
  address: yup.string().required("Address is required"),
  city: yup.string().required("City is required"),
  state: yup.string().required("State is required"),
  contact: yup
    .string()
    .matches(/^\d{10}$/, "Contact number must be 10 digits")
    .required("Contact number is required"),
  email_id: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  image: yup
    .mixed()
    .required("Image is required")
    .test("fileSize", "File too large", (value) => {
      return value && value[0] && value[0].size <= 5 * 1024 * 1024; // 5MB
    })
    .test("fileType", "Unsupported file format", (value) => {
      return value && value[0] && ["image/jpeg", "image/png", "image/webp"].includes(value[0].type);
    }),
});

export default function SchoolForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [imagePreview, setImagePreview] = useState(null);
  const router = useRouter();

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    } else {
      setImagePreview(null);
    }
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    for (const key in data) {
      if (key === "image") {
        formData.append(key, data[key][0]);
      } else {
        formData.append(key, data[key]);
      }
    }

    try {
      const response = await fetch("/api/schools", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        reset();
        setImagePreview(null);
        router.push("/showSchools"); // Redirect to schools page
      } else {
        console.error("Error submitting form");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-blue-100 min-h-screen p-4 md:p-8 animate-fade-in">
      <div className="mx-auto max-w-2xl">

        {/* Form Card */}
        <Card className="border rounded-2xl shadow-2xl shadow-gray-500/40 bg-card/80 backdrop-blur-sm animate-slide-up">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-semibold text-foreground">
              School Registration
            </CardTitle>
            <CardDescription className="text-base">
              Fill in the details below to add a new school to our database
            </CardDescription>
          </CardHeader>

          <CardContent className="px-6 pb-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* School Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* School Name */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="name">School Name *</Label>
                  <Input id="name" type="text" placeholder="Enter school name" {...register("name")} />
                  {errors.name && (
                    <p className="flex items-center gap-2 text-destructive text-sm">
                      <AlertCircle className="w-4 h-4" /> {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Address */}
                <div className="space-y-2 md:col-span-2">
                  <Label htmlFor="address">Address *</Label>
                  <Input id="address" type="text" placeholder="Enter complete address" {...register("address")} />
                  {errors.address && (
                    <p className="flex items-center gap-2 text-destructive text-sm">
                      <AlertCircle className="w-4 h-4" /> {errors.address.message}
                    </p>
                  )}
                </div>

                {/* City */}
                <div className="space-y-2">
                  <Label htmlFor="city">City *</Label>
                  <Input id="city" type="text" placeholder="Enter city" {...register("city")} />
                  {errors.city && (
                    <p className="flex items-center gap-2 text-destructive text-sm">
                      <AlertCircle className="w-4 h-4" /> {errors.city.message}
                    </p>
                  )}
                </div>

                {/* State */}
                <div className="space-y-2">
                  <Label htmlFor="state">State *</Label>
                  <Input id="state" type="text" placeholder="Enter state" {...register("state")} />
                  {errors.state && (
                    <p className="flex items-center gap-2 text-destructive text-sm">
                      <AlertCircle className="w-4 h-4" /> {errors.state.message}
                    </p>
                  )}
                </div>

                {/* Contact */}
                <div className="space-y-2">
                  <Label htmlFor="contact">Contact Number *</Label>
                  <Input id="contact" type="tel" placeholder="1234567890" {...register("contact")} />
                  {errors.contact && (
                    <p className="flex items-center gap-2 text-destructive text-sm">
                      <AlertCircle className="w-4 h-4" /> {errors.contact.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email_id">Email Address *</Label>
                  <Input id="email_id" type="email" placeholder="school@example.com" {...register("email_id")} />
                  {errors.email_id && (
                    <p className="flex items-center gap-2 text-destructive text-sm">
                      <AlertCircle className="w-4 h-4" /> {errors.email_id.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Image Upload Section */}
              <div className="space-y-2">
                <Label>School Image *</Label>
                <div className="relative">
                  <div className="border-2 border-dashed rounded-xl p-8 text-center bg-muted/20 hover:bg-muted/30 transition-colors duration-200 group">
                    <input
                      type="file"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept="image/jpeg,image/png,image/webp"
                      {...register("image")}
                      onChange={handleImageChange}
                    />

                    {imagePreview ? (
                      <div className="space-y-4">
                        <div className="relative inline-block">
                          <img src={imagePreview} alt="Preview" className="max-h-32 rounded-lg object-cover" />
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center rounded-lg">
                            <Upload className="w-6 h-6 text-white" />
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">Click to change image</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-muted rounded-full">
                          <ImageIcon className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <p className="text-lg font-medium">Upload School Image</p>
                        <p className="text-sm text-muted-foreground">PNG, JPG, WEBP • Max 5MB</p>
                      </div>
                    )}
                  </div>
                </div>
                {errors.image && (
                  <p className="flex items-center gap-2 text-destructive text-sm">
                    <AlertCircle className="w-4 h-4" /> {errors.image.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button type="submit" disabled={isSubmitting} className="w-full h-14 text-lg font-semibold">
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
                    Adding School...
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" /> Add School
                  </div>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
