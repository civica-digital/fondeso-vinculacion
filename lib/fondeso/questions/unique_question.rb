module Fondeso
  module Questions
    class UniqueQuestion < Question
      def add_points_for_answer(selected_option, user)
        negative_associations_for_option(selected_option).each do |profile_id|
          add_points_to_profile(user, profile_id, -1)
        end

        positive_associations_for_option(selected_option).each do |profile_id|
          add_points_to_profile(user, profile_id, 1)
        end
      end
    end
  end
end
