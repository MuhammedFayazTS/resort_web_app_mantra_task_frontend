"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    Field,
    FieldError,
    FieldGroup,
    FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { bookingFormSchema } from "@/validators/booking.schema"
import { createBooking } from "@/lib/apis"
import { PackageItem } from "@/types/package.interface"
import { ServiceItem } from "@/types/service.interface"
import CommonTextInput from "../core/CommonTextInput"
import CommonTextArea from "../core/CommonTextArea"
import CommonSelect from "../core/CommonSelect"
import CommonCheckBox from "../core/CommonCheckBox"

const initialValues = {
    name: "",
    email: "",
    phone: "",
    checkInDate: "",
    checkOutDate: "",
    adults: 1,
    children: 0,
    packageId: "",
    specialRequest: "",
    address: "",
    serviceIds: []
} satisfies z.infer<typeof bookingFormSchema>

export function BookingForm({ packages, services }: { packages: PackageItem[] | [], services: ServiceItem[] | [] }) {
    const [step, setStep] = useState(1)
    const form = useForm<z.infer<typeof bookingFormSchema>>({
        resolver: zodResolver(bookingFormSchema),
        defaultValues: initialValues
    })

    async function onSubmit(data: z.infer<typeof bookingFormSchema>) {
        const response = await createBooking(data);
        if (response.data && response.data && response.data.success) {
            const messagqe = response.data.data?.message || "Booking created successfully";
            toast.success(messagqe);
        }
        onReset();
    }

    const onReset = () => {
        form.reset(initialValues);
        handleStepChange(1);
    }

    const handleStepChange = (newStep: number) => {
        if (newStep < 1 || newStep > 3) return;
        setStep(newStep);
    }

    const onClickStepButton = (e: React.MouseEvent<HTMLButtonElement>, targetStep: number) => {
        e.preventDefault();
        handleStepChange(targetStep);
    }

    const onChangeCallbackForPackage = (value: string) => {
        const selectedOption = packages?.find((pkg) => pkg._id === value)
        if (!selectedOption || !selectedOption?.services) return
        form.setValue('serviceIds', selectedOption.services)
    }

    return (
        <Card className="w-full max-w-xl border-none shadow-none  bg-transparent ">
            <CardHeader>
                <CardTitle>Resort Booking</CardTitle>
                <CardDescription>Reserve your stay with all necessary details.</CardDescription>
                <div className="flex items-center justify-center gap-4 mt-4">
                    {
                        [1, 2, 3].map(stepNumber => (
                            <div key={stepNumber} className={`h-2 w-16 rounded-full ${stepNumber === step ? "bg-amber-600" : "bg-gray-300"} transition-colors duration-500 ease-in-out`} />
                        ))
                    }
                </div>

                <p className="text-center text-sm text-gray-500 mt-3">
                    Step {step} of 3
                </p>
            </CardHeader>

            <CardContent>
                <form id="booking-form" onSubmit={form.handleSubmit(onSubmit)}>
                    <FieldGroup>

                        {step === 1 && (
                            <>
                                <CommonTextInput
                                    name="name"
                                    label="Name"
                                    placeholder="John Doe"
                                    control={form.control}
                                />
                                <CommonTextInput
                                    name="email"
                                    label="Email"
                                    placeholder="john@example.com"
                                    control={form.control}
                                />
                                <CommonTextInput
                                    name="phone"
                                    label="Phone"
                                    placeholder="+91 9999999999"
                                    control={form.control}
                                />
                                <CommonTextArea
                                    name="address"
                                    label="Address"
                                    placeholder="123 Street, City, Country"
                                    control={form.control}
                                />
                            </>
                        )}

                        {step === 2 && (
                            <>
                                <CommonSelect
                                    name="packageId"
                                    label="Package"
                                    control={form.control}
                                    placeholder="Select package"
                                    onChangeCallback={onChangeCallbackForPackage}
                                    options={packages?.map((pkg) => ({
                                        ...pkg,
                                        label: pkg.title,
                                        value: pkg._id
                                    }
                                    ))}

                                />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Controller
                                        name="checkInDate"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel>Check-In Date</FieldLabel>
                                                <Input {...field} type="date" />
                                                {fieldState.error && <FieldError errors={[fieldState.error]} />}
                                            </Field>
                                        )}
                                    />

                                    <Controller
                                        name="checkOutDate"
                                        control={form.control}
                                        render={({ field, fieldState }) => (
                                            <Field data-invalid={fieldState.invalid}>
                                                <FieldLabel>Check-Out Date</FieldLabel>
                                                <Input {...field} type="date" />
                                                {fieldState.error && <FieldError errors={[fieldState.error]} />}
                                            </Field>
                                        )}
                                    />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <CommonTextInput
                                        name="adults"
                                        label="Adults"
                                        type="number"
                                        min={1}
                                        control={form.control}
                                    />
                                    <CommonTextInput
                                        name="children"
                                        label="Children"
                                        type="number"
                                        min={0}
                                        control={form.control}
                                    />
                                </div>
                            </>
                        )}


                        {step === 3 && (
                            <>
                                <FieldLabel>Additional Services</FieldLabel>
                                <div className="flex flex-col gap-3">
                                    {services?.map(service => (
                                        <CommonCheckBox
                                            key={service._id}
                                            name="serviceIds"
                                            control={form.control}
                                            option={{ value: service._id, label: service.title }}
                                        />
                                    ))}
                                </div>

                                <CommonTextArea
                                    name="specialRequest"
                                    label="Special Request"
                                    placeholder="Anything specific you need?"
                                    control={form.control}
                                />
                            </>
                        )}


                    </FieldGroup>
                </form>
            </CardContent>

            <CardFooter>
                <Field orientation="horizontal" className="w-full justify-between">

                    <Button type="button" variant="destructive" className="bg-red-500 hover:bg-red-600" onClick={onReset}>
                        Reset
                    </Button>

                    <div className="flex gap-5">
                        {step > 1 && (
                            <Button
                                type="button"
                                variant="outline"
                                onClick={(e) => onClickStepButton(e, step - 1)}
                            >
                                Back
                            </Button>
                        )}

                        {step < 3 ? (
                            <Button
                                type="button"
                                className="bg-amber-600 hover:bg-amber-700"
                                onClick={(e) => onClickStepButton(e, step + 1)}
                            >
                                Next
                            </Button>
                        ) : (
                            <Button
                                type="submit"
                                form="booking-form"
                                className="bg-green-600 hover:bg-green-700"
                            >
                                Submit
                            </Button>
                        )}
                    </div>
                </Field>
            </CardFooter>

        </Card>
    )
}

export default BookingForm
